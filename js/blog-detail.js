(function () {
  "use strict";

  var BLOG_API_BASE = "https://blog-app-backend-two-eta.vercel.app/api/blogs";

  function escapeHtml(str) {
    if (str == null || str === "") return "";
    var div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  }

  function formatDate(iso) {
    if (!iso) return "";
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return "";
    }
  }

  function getIdentifierFromLocation() {
    var params = new URLSearchParams(window.location.search || "");
    var fromQuery = (params.get("slug") || params.get("id") || "").trim();
    if (fromQuery) {
      return {
        value: fromQuery,
        isSlug: Boolean(params.get("slug")),
      };
    }

    var path = window.location.pathname || "";
    var parts = path.split("/").filter(Boolean);
    var lastPart = parts.length ? parts[parts.length - 1] : "";
    if (
      lastPart &&
      lastPart !== "blog-detail.html" &&
      lastPart.indexOf(".html") === -1
    ) {
      return { value: decodeURIComponent(lastPart), isSlug: true };
    }

    return { value: "", isSlug: true };
  }

  function updatePermalink(blog) {
    var permalinkEl = document.getElementById("blogPermalink");
    if (!permalinkEl) return;

    var slug = (blog && blog.slug) || "";
    if (!slug) {
      permalinkEl.innerHTML = "";
      return;
    }

    var prettyPath = "/blog/" + slug;
    var canonicalUrl =
      window.location.origin +
      "/blog-detail.html?slug=" +
      encodeURIComponent(slug);
    permalinkEl.setAttribute("title", canonicalUrl);
  }

  function syncAddressBar(blog) {
    var slug = (blog && blog.slug) || "";
    if (!slug || !window.history || !window.history.replaceState) return;
    var nextUrl = encodeURIComponent(slug);
    window.history.replaceState({}, "", nextUrl);
  }

  function renderError(container, message) {
    if (!container) return;
    container.innerHTML =
      '<div class="alert alert-danger" role="alert">' +
      escapeHtml(message || "Blog not found.") +
      ' <a href="blog.html" class="alert-link">Back to blog</a></div>';
  }

  function applySeo(blog) {
    var title =
      (blog.seoTitle || (blog.seo && blog.seo.metaTitle) || blog.title || "") +
      " | Sky Quest";
    if (title) document.title = title;

    var desc =
      blog.seoDescription ||
      (blog.seo && blog.seo.metaDescription) ||
      blog.excerpt ||
      blog.shortDescription ||
      "";
    var meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);
  }

  function renderArticle(container, blog) {
    var img = blog.coverImage || blog.featuredImage || "";
    var authorName = blog.author && blog.author.name ? blog.author.name : "";
    var fullTitle = blog.title || "Article";
    var shortTitle = fullTitle;
    if (shortTitle.length > 56) shortTitle = shortTitle.slice(0, 53) + "…";
    var breadcrumbTitle = document.getElementById("blogDetailBreadcrumbTitle");
    if (breadcrumbTitle) breadcrumbTitle.textContent = shortTitle;
    var breadcrumbActive = document.getElementById(
      "blogDetailBreadcrumbActive",
    );
    if (breadcrumbActive) breadcrumbActive.textContent = shortTitle;

    var tagsHtml = "";
    if (blog.tags && blog.tags.length) {
      tagsHtml =
        '<div class="blog-detail-tags mb-4">' +
        blog.tags
          .map(function (t) {
            return '<span class="blog-detail-tag">' + escapeHtml(t) + "</span>";
          })
          .join("") +
        "</div>";
    }

    var metaChips = "";
    metaChips +=
      '<span class="blog-detail-meta-chip"><i class="fas fa-layer-group"></i>' +
      escapeHtml(blog.category || "General") +
      "</span>";
    metaChips +=
      '<span class="blog-detail-meta-chip"><i class="far fa-clock"></i>' +
      escapeHtml(String(blog.readingTime || 1)) +
      " min read</span>";
    if (blog.publishedAt) {
      metaChips +=
        '<span class="blog-detail-meta-chip"><i class="far fa-calendar-alt"></i>' +
        escapeHtml(formatDate(blog.publishedAt)) +
        "</span>";
    }
    if (authorName) {
      metaChips +=
        '<span class="blog-detail-meta-chip"><i class="far fa-user"></i>' +
        escapeHtml(authorName) +
        "</span>";
    }
    if (typeof blog.views === "number") {
      metaChips +=
        '<span class="blog-detail-meta-chip"><i class="far fa-eye"></i>' +
        escapeHtml(String(blog.views)) +
        " views</span>";
    }

    container.innerHTML =
      '<div class="blog-detail-meta-row">' +
      metaChips +
      "</div>" +
      '<h1 class="display-6 fw-bold mb-4 blog-detail-title">' +
      escapeHtml(blog.title || "") +
      "</h1>" +
      (img
        ? '<figure class="mb-4 blog-detail-cover"><img src="' +
          escapeHtml(img) +
          '" class="img-fluid w-100" alt="' +
          escapeHtml(blog.title || "Article cover") +
          '" /></figure>'
        : "") +
      (blog.excerpt || blog.shortDescription
        ? '<p class="lead text-muted blog-detail-excerpt">' +
          escapeHtml(blog.excerpt || blog.shortDescription) +
          "</p>"
        : "") +
      tagsHtml +
      '<div class="blog-body blog-detail-body">' +
      (blog.content || "") +
      "</div>";

    applySeo(blog);
    updatePermalink(blog);
    syncAddressBar(blog);
  }

  function init() {
    var container = document.getElementById("blogArticle");
    if (!container) return;

    var identifierMeta = getIdentifierFromLocation();
    if (!identifierMeta.value) {
      renderError(
        container,
        "Missing article link. Open a post from the blog listing.",
      );
      return;
    }

    container.innerHTML =
      '<div class="text-center py-5 text-muted"><span class="spinner-border" role="status"></span><p class="mt-3 mb-0">Loading article…</p></div>';

    var endpoint = identifierMeta.isSlug
      ? "/slug/" + encodeURIComponent(identifierMeta.value)
      : "/" + encodeURIComponent(identifierMeta.value);
    var url = BLOG_API_BASE + endpoint + "?publicOnly=true";

    fetch(url, { credentials: "omit" })
      .then(function (res) {
        return res.json().then(function (body) {
          return { ok: res.ok, body: body };
        });
      })
      .then(function (result) {
        var body = result.body;
        if (!result.ok || !body || !body.success || !body.data) {
          var msg =
            (body && body.message) ||
            (result.ok
              ? "Article could not be loaded."
              : "Unable to load article.");
          renderError(container, msg);
          return;
        }
        renderArticle(container, body.data);
      })
      .catch(function () {
        renderError(container, "Network error. Please try again.");
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
