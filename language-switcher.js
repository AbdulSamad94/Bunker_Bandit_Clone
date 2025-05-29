document.addEventListener("DOMContentLoaded", function () {
  // Set default language to German with UK flag as default
  let currentLanguage = localStorage.getItem("language") || "de";
  const flagIcon = document.getElementById("flag-icon");
  const languageToggle = document.getElementById("language-toggle");

  // Language translations
  const translations = {
    de: {
      nav_home: "Home",
      nav_about: "Über uns",
      nav_media: "Media",
      nav_dates: "Termine",
      nav_contact: "Kontakt",
      nav_imprint: "Impressum",
      welcome_text: "Willkommen bei den",
      band_description:
        "Deine neue Lieblingsband – laut,<br>lebendig und unvergesslich.",
      follow_text: "Folge uns auf unserem Weg!",
      social_media_text:
        "Social-Media-Links folgen in Kürze – wir arbeiten daran.",
      copyright_text:
        "© 2025 BUNKERBANDITS. Alle Rechte vorbehalten. | Webdesign und Programmierung: Dennis Joest mit Unterstützung von KI.",
      // About Page
      about_title: "Über uns",
      our_story: "Unsere Geschichte",
      story_part1:
        "Die BUNKERBANDITS entstanden 2018 in Hamburg, als vier Musiker mit einer gemeinsamen Leidenschaft für kraftvollen, energiegeladenen Rock zusammenfanden. Was in einem alten Bunker-Proberaum begann (daher der Name), entwickelte sich schnell zu einem musikalischen Projekt, das die lokale Hamburger Musikszene aufmischte.",
      story_part2:
        "Von den ersten Proben bis zu ausverkauften Clubs war es ein spannender Weg, geprägt von intensiven Live-Shows, kreativen Jamsessions und einem Sound, der sich stetig weiterentwickelt hat, ohne seine Wurzeln zu vergessen.",
      the_band: "Die Band",
      max_role: "Gesang, Gitarre",
      max_description:
        "Max ist die kraftvolle Stimme der BUNKERBANDITS und bringt mit seiner rauen, emotionalen Stimme die Energie der Band direkt zum Publikum. Seine Gitarrenriffs sind das Rückgrat vieler Songs.",
      sarah_role: "Gesang, Keyboard",
      sarah_description:
        "Sarah verleiht der Band mit ihren mehrstimmigen Harmonien und atmosphärischen Keyboard-Arrangements eine einzigartige Tiefe. Ihre klassische Ausbildung trifft auf Rock-Attitude.",
      tom_role: "Lead-Gitarre",
      tom_description:
        "Tom ist der Lead-Gitarrist und sorgt für die explosiven Soli und komplexen Gitarren-Arrangements. Seine technische Perfektion gepaart mit kreativer Spontaneität macht ihn unverzichtbar.",
      jan_role: "Bass",
      jan_description:
        "Jan legt mit seinem Bass das solide Fundament für den BUNKERBANDITS-Sound. Seine groovigen Basslines und sein Gespür für Rhythmus halten die Band zusammen und treiben sie voran.",
      lena_role: "Schlagzeug",
      lena_description:
        "Lena ist das rhythmische Herz der Band. Ihr kraftvolles, präzises Spiel und ihre Fähigkeit, zwischen sanften Grooves und explosiven Fills zu wechseln, macht sie zur perfekten Ergänzung der Gruppe.",
      our_sound: "Unser Sound",
      sound_part1:
        "Die Musik der BUNKERBANDITS vereint klassischen Rock mit modernen Einflüssen und einem Hauch von Blues und Grunge. Kraftvolle Gitarrenriffs, dynamische Rhythmen und eingängige Melodien verbinden sich mit authentischen deutschen Texten zu einem unverwechselbaren Sound.",
      sound_part2:
        "Live zeichnen wir uns durch eine energiegeladene Performance aus, die das Publikum mitreißt und den Spirit einer echten Rock-Show transportiert – laut, ehrlich und direkt aus dem Herzen.",

      // media html
      media_title: "BunkerBandits - Media",
      music_tab: "Musik",
      videos_tab: "Videos",
      photos_tab: "Fotos",
      our_songs: "Unsere Songs",
      album_hamburg: "Album: Hamburg Nights",
      single: "Single",
      streaming_title: "Hör uns auf deiner bevorzugten Plattform:",
      published_stadtlichter: "Veröffentlicht: 15. Juni 2022",
      published_studio: "Veröffentlicht: 22. April 2022",
      photos_title: "Fotos",
      photos_coming: "Foto-Galerie folgt in Kürze...",
      spotify_title: "Spotify",
      apple_title: "Apple Music",
      tidal_title: "Tidal",
      itunes_title: "iTunes",
      amazon_title: "Amazon Music",
      soundcloud_title: "SoundCloud",

      contact_title: "BunkerBandits - Kontakt",
      name_label: "Name",
      name_placeholder: "Dein Name",
      email_label: "E-Mail",
      email_placeholder: "deine@email.de",
      subject_label: "Betreff",
      subject_default: "Wähle einen Betreff",
      subject_booking: "Booking Anfrage",
      subject_press: "Press & Media",
      subject_fanmail: "Fan Mail",
      subject_other: "Sonstiges",
      message_label: "Nachricht",
      message_placeholder: "Deine Nachricht an uns",
      submit_button: "Nachricht Senden",
      footer_text: "Social-Media-Links folgen in Kürze – wir arbeiten daran.",
      copyright_text:
        "© 2025 BUNKERBANDITS. Alle Rechte vorbehalten. | Webdesign und Programmierung: Dennis Joest mit Unterstützung von KI.",

      imprint_title: "BunkerBandits - Impressum",
      legal_info: "Angaben gemäß § 5 DDG",
      represented_by: "Vertreten durch:",
      contact_info: "Kontaktinformationen",
      content_responsibility:
        "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:",
      disclaimer: "Haftungsausschluss",
      content_liability: "Haftung für Inhalte",
      content_liability_text:
        "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      link_liability: "Haftung für Links",
      link_liability_text:
        "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      privacy: "Datenschutz",
      privacy_text:
        "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
      google_analytics: "Google Analytics",
      google_analytics_text:
        "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ('Google'). Google Analytics verwendet sog. 'Cookies', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.",
      google_adsense: "Google AdSense",
      google_adsense_text:
        "Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA ('Google'). Google Adsense verwendet sog. 'Cookies' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. 'Web Beacons' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacon können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen 'keine Cookies akzeptieren' wählen; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.",
    },
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_media: "Media",
      nav_dates: "Dates",
      nav_contact: "Contact",
      nav_imprint: "Imprint",
      welcome_text: "Welcome to",
      band_description:
        "Your new favorite band – loud,<br>lively and unforgettable.",
      follow_text: "Follow us on our journey!",
      social_media_text:
        "Social media links coming soon – we're working on it.",
      copyright_text:
        "© 2025 BUNKERBANDITS. All rights reserved. | Web design and programming: Dennis Joest with AI support.",
      // About Page
      about_title: "About Us",
      our_story: "Our Story",
      story_part1:
        "BUNKERBANDITS was formed in 2018 in Hamburg when four musicians came together with a shared passion for powerful, energetic rock. What began in an old bunker rehearsal space (hence the name) quickly developed into a musical project that shook up the local Hamburg music scene.",
      story_part2:
        "From the first rehearsals to sold-out clubs, it was an exciting journey marked by intense live shows, creative jam sessions, and a sound that has continually evolved without forgetting its roots.",
      the_band: "The Band",
      max_role: "Vocals, Guitar",
      max_description:
        "Max is the powerful voice of BUNKERBANDITS, bringing the band's energy directly to the audience with his raw, emotional vocals. His guitar riffs are the backbone of many songs.",
      sarah_role: "Vocals, Keyboard",
      sarah_description:
        "Sarah gives the band unique depth with her multi-layered harmonies and atmospheric keyboard arrangements. Her classical training meets rock attitude.",
      tom_role: "Lead Guitar",
      tom_description:
        "Tom is the lead guitarist responsible for the explosive solos and complex guitar arrangements. His technical perfection combined with creative spontaneity makes him indispensable.",
      jan_role: "Bass",
      jan_description:
        "Jan lays the solid foundation for the BUNKERBANDITS sound with his bass. His groovy basslines and sense of rhythm hold the band together and drive it forward.",
      lena_role: "Drums",
      lena_description:
        "Lena is the rhythmic heart of the band. Her powerful, precise playing and ability to switch between gentle grooves and explosive fills make her the perfect complement to the group.",
      our_sound: "Our Sound",
      sound_part1:
        "BUNKERBANDITS' music combines classic rock with modern influences and a touch of blues and grunge. Powerful guitar riffs, dynamic rhythms, and catchy melodies combine with authentic German lyrics to create a distinctive sound.",
      sound_part2:
        "Live, we stand out with an energetic performance that captivates the audience and conveys the spirit of a true rock show - loud, honest, and straight from the heart.",

      // media html

      media_title: "BunkerBandits - Media",
      music_tab: "Music",
      videos_tab: "Videos",
      photos_tab: "Photos",
      our_songs: "Our Songs",
      album_hamburg: "Album: Hamburg Nights",
      single: "Single",
      streaming_title: "Listen to us on your preferred platform:",
      published_stadtlichter: "Published: June 15, 2022",
      published_studio: "Published: April 22, 2022",
      photos_title: "Photos",
      photos_coming: "Photo gallery coming soon...",
      spotify_title: "Spotify",
      apple_title: "Apple Music",
      tidal_title: "Tidal",
      itunes_title: "iTunes",
      amazon_title: "Amazon Music",
      soundcloud_title: "SoundCloud",

      contact_title: "BunkerBandits - Contact",
      name_label: "Name",
      name_placeholder: "Your Name",
      email_label: "Email",
      email_placeholder: "your@email.com",
      subject_label: "Subject",
      subject_default: "Select a subject",
      subject_booking: "Booking Request",
      subject_press: "Press & Media",
      subject_fanmail: "Fan Mail",
      subject_other: "Other",
      message_label: "Message",
      message_placeholder: "Your message to us",
      submit_button: "Send Message",

      // Imprint Page - English
      imprint_title: "BunkerBandits - Imprint",
      legal_info: "Legal Information according to § 5 DDG",
      represented_by: "Represented by:",
      contact_info: "Contact Information",
      content_responsibility:
        "Responsible for content according to § 18 Abs. 2 MStV:",
      disclaimer: "Disclaimer",
      content_liability: "Liability for Contents",
      content_liability_text:
        "The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 DDG under general laws. According to §§ 8 to 10 DDG, we as service providers are not obligated to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.",
      link_liability: "Liability for Links",
      link_liability_text:
        "Our site contains links to external websites of third parties over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon notification of violations, we will remove such links immediately.",
      privacy: "Privacy Policy",
      privacy_text:
        "The use of our website is generally possible without providing personal data. Insofar as personal data (e.g., name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be disclosed to third parties without your express consent. We point out that data transmission over the Internet (e.g., when communicating by email) may have security vulnerabilities. A complete protection of data against access by third parties is not possible.",
      google_analytics: "Google Analytics",
      google_analytics_text:
        "This website uses Google Analytics, a web analytics service provided by Google Inc. ('Google'). Google Analytics uses 'cookies', which are text files placed on your computer to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information to evaluate your use of the website, compile reports on website activity for website operators, and provide other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser; however, please note that if you do this, you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.",
      google_adsense: "Google AdSense",
      google_adsense_text:
        "This website uses Google AdSense, a web advertising service provided by Google Inc., USA ('Google'). Google AdSense uses 'cookies' (text files) that are stored on your computer to analyze how you use the website. Google AdSense also uses 'web beacons' (small invisible graphics) to collect information. Through the use of web beacons, simple actions such as visitor traffic on the website can be recorded and collected. The information generated by the cookie and/or web beacon about your use of this website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information to evaluate your use of the website with regard to advertisements, to compile reports on website activity and advertisements for website operators, and to provide other services related to website and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You can prevent the storage of cookies on your hard drive and the display of web beacons by selecting 'do not accept cookies' in your browser settings; however, please note that if you do this, you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.",
    },
  };

  function updateFlag(lang) {
    // Inverted logic: UK flag for German text, German flag for English text
    flagIcon.src =
      lang === "de" ? "assets/uk_flag.svg" : "assets/germany-flag-icon.svg";
    flagIcon.alt = lang === "de" ? "English" : "Deutsch";
    flagIcon.title =
      lang === "de" ? "Switch to English" : "Auf Deutsch wechseln";
  }

  // Update all elements with data-i18n attributes
  function updateContent(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Add this inside your updateContent() function
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    updateFlag(lang);
  }

  // Toggle language on button click
  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "de" ? "en" : "de";
    localStorage.setItem("language", currentLanguage);
    updateContent(currentLanguage);
  });

  // Load current language on page load
  updateContent(currentLanguage);
});
