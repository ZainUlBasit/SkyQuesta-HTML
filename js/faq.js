// faq.js – injects FAQs into #faqContainer (index) or #auFaqContainer (Australia page)

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
  
  
// Australia page – Australia immigration FAQ (Bootstrap accordion)
var auFaqs = [
  { question: "What does an Australia Immigration Consultant in Qatar actually do?", answer: "An Australia immigration consultant guides you through the full visa process. They check your profile, prepare documents, and submit your application correctly. This reduces mistakes and improves approval chances." },
  { question: "How do I know if I am eligible for Australia immigration from Qatar?", answer: "It is easier than you think, as eligibility depends on age, education, work experience, and English level. Your job must match Australia's skilled occupation list. A consultant can check your points and tell you your chances clearly." },
  { question: "How long does the Australia PR process usually take?", answer: "Processing time depends on visa type and profile strength. Skilled visas often take several months after invitation. Proper documents play an important role to avoid delay." },
  { question: "Can a consultant really increase my visa success rate?", answer: "Yes, correct guidance reduces errors and strengthens your case. Consultants understand immigration rules and documentation standards. A strong and complete file improves approval chances." },
  { question: "What is the minimum IELTS score required for Australian immigration?", answer: "Most skilled visas require at least 6 bands in each module. Higher scores increase your immigration points and ranking. Better English can speed up your invitation chances." },
  { question: "My visa was refused before. Can I apply again? (Troubleshooting)", answer: "Yes, you can reapply after fixing the refusal reason. Many refusals happen due to weak documents or incorrect filing. A professional review helps avoid repeating mistakes." },
  { question: "Which visa is best for skilled workers from Qatar?", answer: "Skilled migration visas are the most popular choice these days all over the world. They offer long-term work rights and PR pathways. The right visa depends on your occupation and points score." },
  { question: "Do consultants also help after visa approval?", answer: "Good consultants support you even after a visa grant. They guide you about travel, settlement, and initial steps in Australia. This makes your transition smoother and stress free." },
  { question: "Is Australia a good choice for long-term settlement?", answer: "It is clear that Australia offers a strong economy, safe cities, and good job opportunities all the time. Permanent residents living there get healthcare, education, and social benefits always. Many families move for a stable and secure future." },
];

// US Visa page – US immigration FAQ (Bootstrap accordion)
var usFaqs = [
  { question: "Why should I hire a US visa immigration consultant in Qatar?", answer: "These consultants know all the visa rules inside and out. They help you put together paperwork and stop you from making mistakes everyone makes. Better approval odds and you don't waste months figuring stuff out yourself." },
  { question: "How long does the US visa process take from Qatar?", answer: "It's different for everyone. What visa you want and your case details matter. Sometimes just weeks, other times you're waiting months. Having someone guide you keeps things moving without getting stuck." },
  { question: "What documents are required for a US visa application?", answer: "You need a passport, photos, and the forms. Depending on your case, they want bank statements, diplomas, employment letters too. A consultant checks so you're not missing anything important." },
  { question: "Can I apply for a US visa without a consultant?", answer: "Sure, if you know what you're doing. But tons of people get rejected over tiny errors they didn't notice. Getting help means fewer headaches and less chance of messing up." },
  { question: "What should I do if my US visa gets rejected?", answer: "Don't panic. Understand exactly why you got denied. Fix that issue and build a better case before applying again. A consultant can really turn things around at this point." },
  { question: "Which is the easiest way to migrate to the USA from Qatar?", answer: "There's no simple answer here. Your background, skills, and goals matter. Most people look at work visas, student visas, business visas, or family connections. A consultant figures out what fits your situation." },
  { question: "How can I increase my chances of US visa approval?", answer: "Be honest and thorough with paperwork - no shortcuts. Practice for the interview and follow their requirements. Having an expert review everything makes your whole case look way more solid." },
];

// Canada page – Canada immigration FAQ (Bootstrap accordion)
var caFaqs = [
  { question: "Can I apply for immigration while living in Qatar?", answer: "Yes, you can do everything from here; there is no need to travel. You mostly submit your application online. Many people do it while still working and living their normal life." },
  { question: "Who actually reviews and approves immigration applications?", answer: "The authority that decides is IRCC (Immigration, Refugees and Citizenship Canada). They review your documents and check if everything is in order. Your consultant helps you put it all together but they cannot make the decision for you." },
  { question: "How important is the English test for immigration?", answer: "It is very important—more than most people think. Most programs consider your English level seriously. Doing well on IELTS can significantly improve your chances." },
  { question: "Can my family move with me if I get approved?", answer: "Yes, in most cases your spouse and children can come with you. They are usually included in the same application. It depends on which program you apply under, so it is worth checking." },
  { question: "How long does the immigration process usually take?", answer: "It really depends; there is no single answer. Some people get through quickly and others wait longer. Having complete documents ready from the start usually helps move things along." },
  { question: "Can I meet a consultant in person if I live near Doha?", answer: "Yes, if you are close to Doha you can meet them face to face. Many people find it easier to sit down and discuss everything. You can also ask questions and get answers on the spot." },
  { question: "What should I do after my visa gets approved?", answer: "First, gather all your important papers and start planning. Most people try to arrange accommodation before flying out. The more you sort out early, the easier it is when you land." },
];

// UK Visa page – UK immigration FAQ (Bootstrap accordion)
var ukFaqs = [
  { question: "How much does hiring a UK immigration consultant in Qatar actually cost?", answer: "Prices really depend on which consultant you pick and what visa you need help with. Some charge flat fees while others bill by the hour or per service. The best thing to do is ask a few consultants for quotes and compare what you're getting for your money." },
  { question: "Can a consultant guarantee my UK visa will get approved?", answer: "No—nobody can promise you'll definitely get approved. What they can do is make your application way stronger and catch mistakes that would get you rejected. The final decision always comes from UK immigration officials, not your consultant." },
  { question: "What's the difference between a certified consultant and just getting advice from a friend?", answer: "Certified consultants have actual training and know current visa laws inside out. Your friend might mean well but outdated info or wrong advice can mess up your whole application. Plus consultants are accountable if they make an error; friends aren't." },
  { question: "Do I need to visit the consultant's office or can everything be done online?", answer: "Most consultants in Qatar offer both options. You can meet in person if you want that face-to-face connection, or handle everything through email and video calls. It's whatever works better for your schedule and comfort level." },
  { question: "What happens if my consultant makes a mistake on my application?", answer: "Good consultants have insurance for this. If their error causes your rejection, they should fix it at no extra cost or help you reapply properly. That's why picking someone certified and reputable really matters—they take responsibility." },
  { question: "Will the consultant handle my visa interview preparation too?", answer: "Most good consultants include interview prep as part of their service. They'll do mock interviews with you, tell you what questions to expect, and coach you on giving strong answers. Some charge extra for this, so ask upfront what's included." },
  { question: "Are online UK immigration consultants as good as local ones in Qatar?", answer: "It really depends on the specific consultant, not where they're located. Some online consultants are excellent and know UK visa law perfectly. But local Qatar consultants might understand regional issues better and be easier to meet with if problems come up." },
];

// Dubai Visa page – Dubai visa FAQ (Bootstrap accordion)
var dubaiFaqs = [
  { question: "How long does a Dubai visa take from Qatar?", answer: "Standard approval usually takes 24–48 hours. Express services reduce waiting time. Exact duration depends on document accuracy." },
  { question: "Can Qatar residents apply for a Dubai visa online?", answer: "Yes. We offer full Dubai visa online application support. It is a 100% online Dubai visa process." },
  { question: "Is travel insurance required?", answer: "It is not always mandatory. However, it is strongly recommended for safe travel." },
  { question: "Can I extend my Dubai tourist visa?", answer: "Yes, extension options may be available depending on visa type. We guide you about eligibility." },
  { question: "What happens if my visa is rejected?", answer: "We explain the reason clearly. Then we guide correction steps. Our goal is to ensure fast Dubai visa approval next time." },
];

// Schengen Visa page – Schengen visa FAQ (Bootstrap accordion)
var schengenFaqs = [
  { question: "Do I really need travel insurance for my trip?", answer: "Yes, it's not optional for most applications. It helps cover medical care or sudden problems while you travel. Think of it as a safety net for your journey." },
  { question: "What happens during the biometric appointment?", answer: "They take your fingerprints and a photo. The process is simple and doesn't take long. Just follow instructions and stay relaxed." },
  { question: "Can I visit more than one country with one visa?", answer: "Yes, that's one of the main benefits. You can move between several countries in the Schengen area. Just make sure you apply through the right country first." },
  { question: "What if my visa gets rejected?", answer: "It happens sometimes, so don't panic. You'll get a letter explaining what went wrong. Fix the issue and you can try again." },
  { question: "Do children need their own visa applications?", answer: "Yes, every traveler needs a separate application. Parents handle the process for younger children. Extra papers, like birth records, may be requested." },
  { question: "Where do I attend my visa appointment?", answer: "Appointments are held at visa centers or embassies. Many residents go to offices in Doha. Bring all documents and arrive on time to avoid problems." },
  { question: "How will I know if my visa is approved?", answer: "You'll be told when your passport is ready to collect. The visa will be placed inside your passport if approved. Always check the dates before you travel." },
];

// Saudi Visa page – Saudi visa FAQ (Bootstrap accordion)
var saudiFaqs = [
  {
    question: "How can I get a Saudi visa from Qatar?",
    answer:
      "Getting a visa doesn\u2019t have to feel like solving a puzzle. First, confirm your Saudi visa requirements for Qatar residents. Then gather your visa documents checklist and submit your file through a trusted visa agent in Qatar. A professional team reduces errors and speeds things up.",
  },
  {
    question: "Where should I apply for a Saudi visa in Qatar?",
    answer:
      "You have two clear paths. You can visit the embassy yourself, or you can work with a trusted Visa consultant in Qatar who understands the full Saudi visa application process. Many applicants choose expert support because document checks and online submissions must be exact. Even a small typing error can cause delays. If you prefer guidance, Sky Quest handles everything step by step, reviews your paperwork carefully, and keeps you updated until your visa moves forward smoothly.",
  },
  {
    question: "How long does Saudi visa processing take?",
    answer:
      "Processing time depends on visa type and document accuracy. Tourist visas may move quickly with fast Saudi visa processing services. However, business or work visas can take longer due to approvals. Clean paperwork always shortens waiting time.",
  },
  {
    question: "Can Qatar residents apply online?",
    answer:
      "Yes, in many cases you can apply for a Saudi Arabia visa online. The system works well if documents are complete. Still, many applicants choose Saudi visa services in Qatar providers to avoid technical errors. Online forms look simple until something goes wrong.",
  },
  {
    question: "What documents are mandatory?",
    answer:
      "Every applicant needs a valid passport, photo, and supporting papers. The exact list depends on visa type. Always verify your Saudi visa requirements before submission. Missing even one item from the Saudi visa documents checklist can pause your application.",
  },
  {
    question: "Is using a Saudi visa consultant really helpful?",
    answer:
      "Honestly, yes. A skilled Saudi visa consultant Qatar understands policy updates and hidden conditions. Instead of guessing, you get clarity. Many clients choose the visa agent in Qatar to get the visa approved fast without unnecessary stress.",
  },
  {
    question: "Can I apply for a Saudi business visa from Qatar?",
    answer:
      "Absolutely. The Saudi business visa requires invitation letters and company documents. Accuracy matters here. Professional Saudi visa services in Qatar ensure your commercial paperwork aligns with ministry standards.",
  },
  {
    question: "What about Umrah or E-Visa options?",
    answer:
      "Religious travel has specific eligibility rules. You must check updated entry conditions before applying. Many applicants prefer expert support when they Apply a Saudi visa from Qatar to avoid rejection. Guidance makes the path smoother.",
  },
  {
    question: "Why do some visas get rejected?",
    answer:
      "Most rejections happen due to incorrect details or weak documentation. Sometimes travel history raises questions. Working with Professional document clearing Qatar specialists minimizes these risks. Careful review prevents unnecessary disappointment.",
  },
  {
    question: "How do I choose the right visa agent?",
    answer:
      "Start with reputation and transparency. Read reviews and ask about success rates. A trusted Saudi visa agent in Qatar explains costs clearly and guides you step by step. When service feels organized and responsive, you\u2019re in safe hands.",
  },
];

function renderFAQs() {
  var container = document.getElementById("faqContainer");
  if (!container) return;

  var accordionId = "mainFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    faqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "mainFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderAuFAQs() {
  var container = document.getElementById("auFaqContainer");
  if (!container) return;

  var accordionId = "auFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    auFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "auFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderUsFAQs() {
  var container = document.getElementById("usFaqContainer");
  if (!container) return;
  var accordionId = "usFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    usFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "usFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderCaFAQs() {
  var container = document.getElementById("caFaqContainer");
  if (!container) return;
  var accordionId = "caFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    caFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "caFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderUkFAQs() {
  var container = document.getElementById("ukFaqContainer");
  if (!container) return;
  var accordionId = "ukFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    ukFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "ukFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderDubaiFAQs() {
  var container = document.getElementById("dubaiFaqContainer");
  if (!container) return;
  var accordionId = "dubaiFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    dubaiFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "dubaiFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderSchengenFAQs() {
  var container = document.getElementById("schengenFaqContainer");
  if (!container) return;
  var accordionId = "schengenFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    schengenFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "schengenFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
}

function renderSaudiFAQs() {
  var container = document.getElementById("saudiFaqContainer");
  if (!container) return;
  var accordionId = "saudiFaqAccordion";
  container.innerHTML =
    '<div class="accordion accordion-flush" id="' +
    accordionId +
    '">' +
    saudiFaqs
      .map(function (faq, i) {
        var n = i + 1;
        var id = "saudiFaq" + n;
        return (
          '<div class="accordion-item">' +
          '  <h3 class="accordion-header">' +
          '    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          id +
          '" aria-expanded="false" aria-controls="' +
          id +
          '">' +
          n +
          ". " +
          faq.question +
          "</button>" +
          "  </h3>" +
          '  <div id="' +
          id +
          '" class="accordion-collapse collapse" data-bs-parent="#' +
          accordionId +
          '">' +
          '    <div class="accordion-body">' +
          faq.answer +
          "</div>" +
          "  </div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>";
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

function initFaqs() {
  renderFAQs();
  renderAuFAQs();
  renderUsFAQs();
  renderCaFAQs();
  renderUkFAQs();
  renderDubaiFAQs();
  renderSchengenFAQs();
  renderSaudiFAQs();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFaqs);
} else {
  initFaqs();
}
