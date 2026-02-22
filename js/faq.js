// faq.js – injects FAQs into #faqContainer and handles accordion toggle

var faqs = [
  {
    question: "How do I know which visa is right for me?",
    answer:
      "The right and suitable visa depends on your purpose of travel, such as study, work, business, or visiting. At SKY QUEST, our consultants will evaluate your profile first, goals, and eligibility to recommend the most suitable option for your situation.",
  },
  {
    question: "What documents are usually required for a visa application?",
    answer:
      "Document requirements vary by country and visa type, but typically include a valid passport, financial proof, and supporting records.",
  },
  {
    question: "How long does the visa process usually take?",
    answer:
      "The processing time differs for each visa category and your destination. Some applications are processed within a few weeks, while others may take longer, depending on verification procedures and embassy timelines.",
  },
  {
    question: "Can I apply again if my visa was previously rejected?",
    answer:
      "Yes, you can reapply after understanding the reason for rejection. Reviewing the previous application and correcting documentation or eligibility gaps can improve your approval chances.",
  },
  {
    question: "Do I need to visit the office for consultation?",
    answer:
      "You can visit our office, and we also offer online consultations. Many applicants begin their immigration process through online or phone consultations for convenience and to benefit from our online visa service.",
  },
  {
    question: "Will I receive support after my application is submitted?",
    answer:
      "Yes, ongoing support is a priority for us. Applicants are guided through updates, additional document requests, and any follow-up communication until a final decision is received.",
  },
  {
    question: "How can I get started with the immigration process?",
    answer:
      "To start, begin with a consultation to assess your eligibility and understand the requirements. Once your profile is reviewed by our team, you will receive clear guidance on documentation and next steps.",
  },
];

function renderFAQs() {
  var container = document.getElementById("faqContainer");
  if (!container) return;

  container.innerHTML = faqs
    .map(function (faq) {
      return (
        '<div class="faq-item">' +
        '  <div class="faq-question">' +
        '    <span class="faq-question-text">' +
        faq.question +
        "</span>" +
        '    <i class="fas fa-chevron-down faq-icon"></i>' +
        "  </div>" +
        '  <div class="faq-answer-wrap" style="max-height:0">' +
        '    <div class="faq-answer">' +
        faq.answer +
        "</div>" +
        "  </div>" +
        "</div>"
      );
    })
    .join("");

  initFAQToggle();
}

function initFAQToggle() {
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answerWrap = item.querySelector(".faq-answer-wrap");
    var answer = item.querySelector(".faq-answer");
    var icon = item.querySelector(".faq-icon");
    if (!question || !answerWrap || !answer) return;

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.classList.remove("active");
        var w = other.querySelector(".faq-answer-wrap");
        if (w) w.style.maxHeight = "0";
      });
      document.querySelectorAll(".faq-icon").forEach(function (i) {
        i.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        item.classList.add("active");
        answerWrap.style.maxHeight = answer.scrollHeight + 24 + "px";
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });

  window.addEventListener("resize", function () {
    document
      .querySelectorAll(".faq-item.active .faq-answer-wrap")
      .forEach(function (wrap) {
        var a = wrap.querySelector(".faq-answer");
        if (a) wrap.style.maxHeight = a.scrollHeight + 24 + "px";
      });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderFAQs);
} else {
  renderFAQs();
}
