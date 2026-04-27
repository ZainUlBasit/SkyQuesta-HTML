(function () {
  "use strict";

  var BLOG_API_BASE =
    "https://blog-app-backend-two-eta.vercel.app/api/blogs";

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
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return "";
    }
  }

  function getInitials(name) {
    if (!name) return "SQ";
    var parts = String(name).trim().split(/\s+/).slice(0, 2);
    if (!parts.length) return "SQ";
    return parts
      .map(function (part) {
        return part.charAt(0).toUpperCase();
      })
      .join("");
  }

  function buildQuery(params) {
    var parts = ["publicOnly=true"];
    if (params.page) parts.push("page=" + encodeURIComponent(String(params.page)));
    if (params.limit) parts.push("limit=" + encodeURIComponent(String(params.limit)));
    return parts.join("&");
  }

  function renderError(container, message) {
    if (!container) return;
    container.innerHTML =
      '<div class="alert alert-danger border-0 shadow-sm mb-0 rounded-3" role="alert">' +
      '<i class="fas fa-exclamation-circle me-2"></i>' +
      escapeHtml(message || "Something went wrong.") +
      "</div>";
    container.classList.remove("d-none");
  }

  function renderCard(b) {
    var img = b.coverImage || b.featuredImage || "";
    var excerpt = b.excerpt || b.shortDescription || "";
    var authorName = b.author && b.author.name ? b.author.name : "";
    var identifier = b.slug || b._id || "";
    var href = b.slug
      ? "blog-detail.html?slug=" + encodeURIComponent(identifier)
      : "blog-detail.html?id=" + encodeURIComponent(identifier);
    var excerptShort =
      excerpt.length > 160 ? excerpt.slice(0, 157) + "…" : excerpt;
    var category = b.category || "General";
    var publishedDate = formatDate(b.publishedAt);
    var readingTime = String(b.readingTime || 1) + " min read";
    var tagText = b.tags && b.tags.length ? b.tags[0] : "";
    var featuredBadge = b.isFeatured
      ? '<span class="blog-card-v3-featured-pill"><i class="fas fa-sparkles me-1"></i>Featured</span>'
      : "";

    return (
      '<div class="col-md-6 col-xl-4">' +
      '<article class="blog-card-v3 card h-100 border-0 overflow-hidden position-relative">' +
      featuredBadge +
      '<a href="' +
      href +
      '" class="blog-card-v3-media d-block overflow-hidden">' +
      (img
        ? '<div class="blog-card-v3-media-inner"><img src="' +
          escapeHtml(img) +
          '" class="w-100" alt="' +
          escapeHtml(b.title || "Blog cover") +
          '" loading="lazy" /></div>'
        : '<div class="blog-card-v3-placeholder d-flex align-items-center justify-content-center text-muted"><i class="fas fa-newspaper fa-3x opacity-25"></i></div>') +
      '<div class="blog-card-v3-media-overlay"></div>' +
      '<div class="blog-card-v3-top-meta">' +
      '<span class="blog-card-v3-chip"><i class="fas fa-book-open me-1"></i>' +
      escapeHtml(category) +
      "</span>" +
      (tagText
        ? '<span class="blog-card-v3-chip blog-card-v3-chip-soft">#' +
          escapeHtml(tagText) +
          "</span>"
        : "") +
      "</div>" +
      "</a>" +
      '<div class="card-body d-flex flex-column p-4 position-relative">' +
      '<h3 class="h5 card-title fw-bold mb-2 blog-card-v3-title">' +
      escapeHtml(b.title || "") +
      "</h3>" +
      '<p class="card-text text-muted small grow mb-3 blog-card-v3-excerpt">' +
      escapeHtml(excerptShort) +
      "</p>" +
      '<div class="d-flex flex-wrap align-items-center gap-2 small text-muted mt-auto blog-card-v3-meta">' +
      '<span class="blog-card-v3-chip blog-card-v3-chip-outline"><i class="far fa-clock me-1"></i>' +
      escapeHtml(readingTime) +
      "</span>" +
      (publishedDate
        ? '<span class="blog-card-v3-chip blog-card-v3-chip-outline"><i class="far fa-calendar me-1"></i>' +
          escapeHtml(publishedDate) +
          "</span>"
        : "") +
      "</div>" +
      '<div class="blog-card-v3-footer mt-3 pt-3">' +
      '<div class="d-flex align-items-center gap-2">' +
      (authorName
        ? '<span class="blog-card-v3-avatar">' +
          escapeHtml(getInitials(authorName)) +
          "</span>" +
          '<span class="blog-card-v3-author">' +
          escapeHtml(authorName) +
          "</span>"
        : '<span class="blog-card-v3-author">Sky Quest Team</span>') +
      "</div>" +
      '<span class="blog-card-v3-cta">Read article <i class="fas fa-arrow-right ms-1"></i></span>' +
      "</div>" +
      (typeof b.views === "number"
        ? '<span class="blog-card-v3-views mt-2"><i class="far fa-eye me-1"></i>' +
          escapeHtml(String(b.views)) +
          " views</span>"
        : "") +
      (b.isFeatured
        ? '<span class="blog-card-v3-feature-line"><i class="fas fa-award me-1"></i>Editor pick</span>'
        : "") +
      '<a href="' +
      href +
      '" class="stretched-link" aria-label="Read article: ' +
      escapeHtml(b.title || "Blog article") +
      '"><span class="visually-hidden">Read article</span></a>' +
      "</div>" +
      "</article>" +
      "</div>"
    );
  }

  function renderGrid(container, items) {
    if (!container) return;
    container.innerHTML = "";
    if (!items || !items.length) {
      container.innerHTML =
        '<div class="col-12">' +
        '<div class="blog-empty-state text-center py-5 px-4 rounded-4 border bg-light">' +
        '<div class="blog-empty-icon mx-auto mb-4"><i class="fas fa-newspaper"></i></div>' +
        '<h3 class="h4 fw-bold mb-2">No articles yet</h3>' +
        '<p class="text-muted mb-0 mx-auto" style="max-width: 26rem">Check back soon for new posts.</p>' +
        "</div></div>";
      return;
    }
    for (var i = 0; i < items.length; i++) {
      var holder = document.createElement("div");
      holder.innerHTML = renderCard(items[i]);
      var node = holder.firstElementChild;
      if (node) container.appendChild(node);
    }
  }

  function showSkeleton(listEl) {
    if (!listEl) return;
    var html = "";
    var i;
    for (i = 0; i < 6; i++) {
      html +=
        '<div class="col-md-6 col-xl-4">' +
        '<div class="blog-skeleton card border-0 shadow-sm overflow-hidden h-100">' +
        '<div class="blog-skeleton-shimmer blog-skeleton-img"></div>' +
        '<div class="p-4">' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-25 mb-3"></div>' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-75 mb-2"></div>' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-50 mb-4"></div>' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-100 mb-2"></div>' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-90 mb-2"></div>' +
        '<div class="blog-skeleton-shimmer blog-skeleton-line w-40"></div>' +
        "</div></div></div>";
    }
    listEl.innerHTML = html;
  }

  function updateStats(data) {
    var totalEl = document.getElementById("blogStatTotal");
    var pagesEl = document.getElementById("blogStatPages");
    var lineEl = document.getElementById("blogStatLine");
    var total = typeof data.total === "number" ? data.total : 0;
    var page = data.page || 1;
    var totalPages = data.totalPages || 1;
    var count = (data.items && data.items.length) || 0;

    if (totalEl) totalEl.textContent = String(total);
    if (pagesEl) pagesEl.textContent = String(totalPages);

    if (lineEl) {
      if (total === 0) {
        lineEl.textContent = "No articles in the catalogue yet.";
      } else {
        lineEl.textContent =
          "Showing " +
          count +
          " on this page · " +
          total +
          " total · Page " +
          page +
          " of " +
          totalPages;
      }
    }
  }

  function renderPagination(el, page, totalPages, onPage) {
    if (!el) return;
    el.innerHTML = "";
    if (totalPages <= 1) return;

    var nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Blog pagination");
    var ul = document.createElement("ul");
    ul.className =
      "pagination blog-page-pagination justify-content-center align-items-center flex-wrap gap-1 mb-0";

    function addNavBtn(targetPage, html, disabled) {
      var li = document.createElement("li");
      li.className = "page-item" + (disabled ? " disabled" : "");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "page-link rounded-3 blog-page-page-btn";
      btn.innerHTML = html;
      if (!disabled) {
        btn.addEventListener("click", function () {
          onPage(targetPage);
        });
      } else {
        btn.disabled = true;
        btn.tabIndex = -1;
        btn.setAttribute("aria-disabled", "true");
      }
      li.appendChild(btn);
      ul.appendChild(li);
    }

    function addNumber(p, active) {
      var li = document.createElement("li");
      li.className = "page-item" + (active ? " active" : "");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "page-link rounded-3 blog-page-page-btn";
      btn.textContent = String(p);
      if (active) btn.setAttribute("aria-current", "page");
      else
        btn.addEventListener("click", function () {
          onPage(p);
        });
      li.appendChild(btn);
      ul.appendChild(li);
    }

    function addEllipsis() {
      var li = document.createElement("li");
      li.className = "page-item disabled";
      var span = document.createElement("span");
      span.className =
        "page-link border-0 bg-transparent text-muted user-select-none blog-page-page-btn";
      span.innerHTML = "&hellip;";
      li.appendChild(span);
      ul.appendChild(li);
    }

    addNavBtn(
      page - 1,
      '<span class="px-1"><i class="fas fa-chevron-left" aria-hidden="true"></i></span><span class="d-none d-sm-inline"> Prev</span>',
      page <= 1
    );

    var set = {};
    var list = [];
    var i;
    for (i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - 1 && i <= page + 1)
      ) {
        if (!set[i]) {
          list.push(i);
          set[i] = true;
        }
      }
    }
    list.sort(function (a, b) {
      return a - b;
    });
    var prev = 0;
    for (i = 0; i < list.length; i++) {
      var pNum = list[i];
      if (prev && pNum - prev > 1) addEllipsis();
      addNumber(pNum, pNum === page);
      prev = pNum;
    }

    addNavBtn(
      page + 1,
      '<span class="d-none d-sm-inline">Next </span><span class="px-1"><i class="fas fa-chevron-right" aria-hidden="true"></i></span>',
      page >= totalPages
    );

    nav.appendChild(ul);
    el.appendChild(nav);
  }

  function scrollToContent() {
    var el = document.getElementById("blogContentStart");
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function fetchBlogs(state, els) {
    var listEl = els.listEl;
    var errEl = els.errEl;
    var pagEl = els.pagEl;

    if (errEl) {
      errEl.classList.add("d-none");
      errEl.innerHTML = "";
    }
    showSkeleton(listEl);
    if (pagEl) pagEl.innerHTML = "";

    var url = BLOG_API_BASE + "?" + buildQuery(state);
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
            (result.ok ? "Invalid response from server." : "Unable to load blogs.");
          renderError(errEl, msg);
          if (listEl) listEl.innerHTML = "";
          return;
        }
        var data = body.data;
        updateStats(data);
        renderGrid(listEl, data.items || []);

        renderPagination(pagEl, data.page || 1, data.totalPages || 1, function (p) {
          state.page = p;
          fetchBlogs(state, els);
          scrollToContent();
        });
      })
      .catch(function () {
        renderError(errEl, "Network error. Please try again.");
        if (listEl) listEl.innerHTML = "";
      });
  }

  function init() {
    var listEl = document.getElementById("blogList");
    if (!listEl) return;

    var errEl = document.getElementById("blogError");
    var pagEl = document.getElementById("blogPagination");

    var state = {
      page: 1,
      limit: 9,
    };

    fetchBlogs(state, {
      listEl: listEl,
      errEl: errEl,
      pagEl: pagEl,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
