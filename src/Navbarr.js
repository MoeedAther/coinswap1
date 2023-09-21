import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
// import logoo from "./mainlogo-removebg-preview.png";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import eng from "./united-kingdom.png";
import german from "./germany.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { set_lang, set_langcode } from './features/offerSlice.js'
import ReactFlagsSelect from "react-flags-select";
import { useDispatch, useSelector } from 'react-redux'

// import Particles from 'react-particles-js';

function Navbarr() {

  const dispatch = useDispatch()
  const langcode = useSelector(state => state.offer.langcode)
  const [select, setSelect] = useState(langcode);
  const onSelect = (code) => setSelect(code);
  const lang = useSelector(state => state.offer.lang)


  useEffect(() => {
    dispatch(set_langcode(select))

    if (select == "US") {
      dispatch(set_lang(lang_en))

    } else if (select == "ES") {
      dispatch(set_lang(lang_es))

    } else if (select == "FR") {
      dispatch(set_lang(lang_fr))

    } else if (select == "DE") {
      dispatch(set_lang(lang_de))

    } else if (select == "IT") {
      dispatch(set_lang(lang_it))

    } else if (select == "PT") {
      dispatch(set_lang(lang_pt))

    } else if (select == "SE") {
      dispatch(set_lang(lang_se))

    } else if (select == "CN") {
      dispatch(set_lang(lang_cn))

    } else if (select == "JP") {
      dispatch(set_lang(lang_jp))

    } else if (select == "PK") {
      dispatch(set_lang(lang_pk))

    } else if (select == "RU") {
      dispatch(set_lang(lang_ru))

    } else if (select == "TR") {
      dispatch(set_lang(lang_tr))

    } else if (select == "SA") {
      dispatch(set_lang(lang_sa))

    } else {
      dispatch(set_lang(lang_en))

    }
    console.log(langcode)
  }, [select])

  const lang_en = {
    exchangecrypto: "Exchange Crypto",
    buycrypto: "Buy Crypto",
    noextrafees: "No extra fees",
    estimated: "Estimated",
    viewoffers: "VIEW OFFERS",
    freedom: "Freedom to choose",
    yourexchange: "your exchange",
    bestrates: "Best Rates",
    infiniteswipes: "Infinite Swaps",
    getourwallet: "Get our Wallet",
    watchtutorial: "Watch Tutorial",
    selectapair: "Select amount",
    amount: "Amount",
    selectexchange: "Select exchange",
    sortbyrate: "Best Rate",
    sortbyeta: "Fastest Swap",
    sortbyrating: "Best Rating",
    content: "Coinoswap provides you with exchange options from the swap services and exchanges we partner with. If our partners’ rules contain extra requirements, such as KYC procedure or floating rate, we obey them. Be careful and read the selected partner's terms before you start an exchange.",
    yousent: "You send",
    youget: "You get",
    termofuse: "Term of Use",
    privacypolicy: "Privacy Policy",

    howitworks: "How It Works",
    contact: "Contact",
    affiliateprogram: "Affiliate Program",
    faq: "FAQ",
    blog: "Blog",
    aboutus: "About Us",
    ordertracker: "Order Tracker",
    ourblog: "Our Blog",
    ourpartners: "Our Partners",
    pressaboutus: "Press About Us",
    widgets: "Widgets",
    trackorder: "Track Order",
    apidoc: "Api Documentation",
    exchangelisting: "Exchange Listing",
    allpairs: "All pairs",
    allcur: "All currencies"

  }

  //Spanish
  const lang_es = {
    termofuse: "Terminos de uso",
    privacypolicy: "política de privacidad",
    exchangecrypto: "Intercambiar Criptomonedas",
    buycrypto: "Comprar Cripto",
    noextrafees: "Sin tarifas adicionales",
    estimated: "Estimado",
    viewoffers: "VER OFERTAS",
    freedom: "libertad de elegir",
    yourexchange: "tu intercambio",
    bestrates: "Mejor Tarifa",
    infiniteswipes: "Intercambios Infinitos",
    getourwallet: "Obtenga nuestra Billetera",
    watchtutorial: "Ver el Tutorial",
    buycryptowith: "Compra criptomonedas con",
    selectapair: "Seleccione un par",
    amount: "Cantidad",
    selectexchange: "Seleccione Intercambio",
    sortbyrate: "Ordenar por tarifa",
    sortbyeta: "Ordenar por ETA",
    sortbyrating: "Ordenar por calificación",
    content: "Coinoswap le ofrece opciones de intercambio de los servicios de intercambio y los intercambios con los que nos asociamos. Si las reglas de nuestros socios contienen requisitos adicionales, como el procedimiento KYC o la tasa flotante, los obedecemos. Tenga cuidado y lea los términos del socio seleccionado antes de iniciar un intercambio.",
    yousent: "Usted envía",
    youget: "Usted obtiene",
    howitworks: "Cómo funciona",
    contact: "Contacto",
    affiliateprogram: "programa de afiliación",
    faq: "Preguntas más frecuentes",
    blog: "Blog",
    aboutus: "Sobre nosotros",
    ordertracker: "Rastreador de pedidos",
    ourblog: "Nuestro blog",
    ourpartners: "Nuestros compañeros",
    pressaboutus: "Prensa Sobre Nosotros",
    widgets: "Widgets",
    trackorder: "Orden de pista",
    apidoc: "Api Documentación",
    exchangelisting: "Listado de intercambio",
    allpairs: "Todos los pares",
    allcur: "Todas las monedas"
  }

  //French
  const lang_fr = {
    termofuse: "Conditions d'utilisation",
    privacypolicy: "politique de confidentialité    ",
    exchangecrypto: "Échange de Crypto",
    buycrypto: "Acquistare Crypto",
    noextrafees: "Pas de frais supplémentaires",
    estimated: "Estimé",
    viewoffers: "VOIR LES OFFRES",
    freedom: "Liberté de choisir",
    yourexchange: "votre échange",
    bestrates: "Meilleurs Tarifs",
    infiniteswipes: "Échanges Infinis",
    getourwallet: "Obtenez notre Portefeuille",
    watchtutorial: "Regarder le Didacticiel",
    buycryptowith: "Achetez des cryptos avec",
    selectapair: "Sélectionnez une paire",
    amount: "Montant",
    selectexchange: "Sélectionnez Échange",
    sortbyrate: "Trier par tarif",
    sortbyeta: "Trier par ETA",
    sortbyrating: "Trier par note",
    content: "Coinoswap vous offre des options d'échange à partir des services d'échange et des échanges avec lesquels nous sommes partenaires. Si les règles de nos partenaires contiennent des exigences supplémentaires, telles que la procédure KYC ou le taux variable, nous les respectons. Soyez prudent et lisez les conditions du partenaire sélectionné avant de commencer un échange.",
    yousent: "Vous envoyez",
    youget: "Vous obtenez",
    howitworks: "Comment ça fonctionne",
    contact: "Contacter",
    affiliateprogram: "Programme d'affiliation",
    faq: "FAQ",
    blog: "Blog",
    aboutus: "À propos de nous",
    ordertracker: "Suivi des commandes",
    ourblog: "Notre blog",
    ourpartners: "Nos partenaires",
    pressaboutus: "À propos de nous",
    widgets: "Widget",
    trackorder: "Suivi de commande",
    apidoc: "Documentation API",
    exchangelisting: "Liste d'échange",
    allpairs: "Toutes les paires",
    allcur: "Toutes les devises"
  }

  //Germany/Dutch
  const lang_de = {
    termofuse: "Nutzungsbedinungen",
    privacypolicy: "Datenschutz-Bestimmungen",
    exchangecrypto: "Wissel Cryptovaluta uit",
    buycrypto: "Cryptovaluta Kopen",
    noextrafees: "Geen extra kosten",
    estimated: "Geschat",
    viewoffers: "BEKIJK AANBIEDINGEN",
    freedom: "Vrijheid om te kiezen",
    yourexchange: "uw uitwisseling",
    bestrates: "Beste tarieven",
    infiniteswipes: "Oneindige wissels",
    getourwallet: "Download onze portemonnee",
    watchtutorial: "Bekijk de Tutorial",
    buycryptowith: "Crypto kopen met",
    selectapair: "Selecteer een paar",
    amount: "Hoeveelheid",
    selectexchange: "Selecteer Uitwisselen",
    sortbyrate: "Sorteer op tarief",
    sortbyeta: "Sorteer op ETA",
    sortbyrating: "Sorteer op waardering",
    content: "Coinoswap biedt u ruilopties van de ruildiensten en uitwisselingen waarmee we samenwerken. Als de regels van onze partners extra vereisten bevatten, zoals de KYC-procedure of variabele rente, gehoorzamen we daaraan. Wees voorzichtig en lees de voorwaarden van de geselecteerde partner voordat u een ruil start.",
    yousent: "Du sendest",
    youget: "Du erhältst",
    howitworks: "Hoe het werkt",
    contact: "Contact",
    affiliateprogram: "Affiliate programma",
    faq: "FAQ",
    blog: "Bloggen",
    aboutus: "Over ons",
    ordertracker: "Ordertracker",
    ourblog: "Onze blog",
    ourpartners: "Onze partners",
    pressaboutus: "Druk op Over ons",
    widgets: "Widgets",
    trackorder: "Order volgen",
    apidoc: "Api documentatie",
    exchangelisting: "Exchange-lijst",
    allpairs: "Alle paren",
    allcur: "Alle valuta's"

  }

  //Italy/italian
  const lang_it = {
    termofuse: "Termini d'uso",
    privacypolicy: "politica sulla riservatezza",
    exchangecrypto: "Scambio Crypto",
    buycrypto: "Acquistare Crypto",
    noextrafees: "Nessun costo aggiuntivo",
    estimated: "Stimato",
    viewoffers: "GUARDA LE OFFERTE",
    freedom: "Libertà di scegliere",
    yourexchange: "il tuo scambio",
    bestrates: "Migliori Tariffe",
    infiniteswipes: "Scambi infiniti",
    getourwallet: "Ottieni il nostro portafoglio",
    watchtutorial: "Watch Tutorial",
    buycryptowith: "Guarda Tutorial",
    selectapair: "Seleziona un paio",
    amount: "Quantità",
    selectexchange: "Seleziona Scambia",
    sortbyrate: "Ordina per tasso",
    sortbyeta: "Ordina per ETA",
    sortbyrating: "Ordina per Valutazione",
    content: "Coinoswap ti offre opzioni di scambio dai servizi di scambio e dagli scambi con cui collaboriamo. Se le regole dei nostri partner contengono requisiti aggiuntivi, come la procedura KYC o il tasso variabile, li obbediamo. Fai attenzione e leggi i termini del partner selezionato prima di iniziare uno scambio.",
    yousent: "Tu invii",
    youget: "Ottieni",

    howitworks: "Come funziona",
    contact: "Contatto",
    affiliateprogram: "Programma Affiliato",
    faq: "FAQ",
    blog: "Blog",
    aboutus: "Chi siamo",
    ordertracker: "Tracciatore di ordini",
    ourblog: "Il nostro blog",
    ourpartners: "I nostri partner",
    pressaboutus: "Premere Chi siamo",
    widgets: "Widgets",
    trackorder: "Ordine dei brani",
    apidoc: "Documentazione API",
    exchangelisting: "Elenco di scambio",
    allpairs: "Tutte le coppie",
    allcur: "Tutte le valute"

  }

  //Portuguese
  const lang_pt = {
    termofuse: "Termo de Uso    ",
    privacypolicy: "política de Privacidade",
    exchangecrypto: "Troca de Criptografia",
    buycrypto: "Comprar Criptomoedas",
    noextrafees: "Sem taxas extras",
    estimated: "Estimado",
    viewoffers: "VER OFERTAS",
    freedom: "Liberdade de escolha",
    yourexchange: "sua troca",
    bestrates: "Melhores Tarifas",
    infiniteswipes: "Trocas Infinitas",
    getourwallet: "Obtenha nossa Carteira",
    watchtutorial: "Veja o Tutorial",
    buycryptowith: "Compre cripto com",
    selectapair: "Selecione um par",
    amount: "Montante",
    selectexchange: "Selecione Troca",
    sortbyrate: "Classificar por taxa",
    sortbyeta: "Ordenar por ETA",
    sortbyrating: "Classificar por classificação",
    content: "A Coinoswap oferece opções de troca dos serviços de troca e trocas com as quais temos parceria. Se as regras de nossos parceiros contiverem requisitos extras, como procedimento KYC ou taxa flutuante, nós os obedecemos. Tenha cuidado e leia os termos do parceiro selecionado antes de iniciar uma troca.",
    yousent: "Você envia",
    youget: "você consegue",

    howitworks: "Como funciona",
    contact: "Contato",
    affiliateprogram: "Programa de Afiliados",
    faq: "Perguntas frequentes",
    blog: "Blog",
    aboutus: "Sobre nós",
    ordertracker: "Rastreador de pedidos",
    ourblog: "Nosso blog",
    ourpartners: "Nossos Parceiros",
    pressaboutus: "Pressione Sobre nós",
    widgets: "Widgets",
    trackorder: "Acompanhar Pedido",
    apidoc: "Documentação da Api",
    exchangelisting: "Lista de troca",
    allpairs: "Todos os pares",
    allcur: "Todas as moedas"
  }

  //Sweden/Swedish
  const lang_se = {
    termofuse: "Användarvillkor",
    privacypolicy: "Integritetspolicy",
    exchangecrypto: "Utbyta Crypto",
    buycrypto: "köpa Crypto",
    noextrafees: "Inga extra avgifter",
    estimated: "Beräknad",
    viewoffers: "SE ERBJUDANDEN",
    freedom: "Frihet att välja",
    yourexchange: "ditt utbyte",
    bestrates: "Bästa priser",
    infiniteswipes: "Oändliga byten",
    getourwallet: "Skaffa vår plånbok",
    watchtutorial: "Titta på handledning",
    buycryptowith: "Köp krypto med",
    selectapair: "Välj ett par",
    amount: "Belopp",
    selectexchange: "Välj Exchange",
    sortbyrate: "Sortera efter kurs",
    sortbyeta: "Sortera efter ETA",
    sortbyrating: "Sortera efter betyg",
    content: "Coinoswap ger dig utbytesalternativ från de bytestjänster och börser vi samarbetar med. Om våra partners regler innehåller extra krav, såsom KYC-förfarande eller rörlig ränta, följer vi dem. Var försiktig och läs den valda partners villkor innan du påbörjar ett utbyte.",
    yousent: "Du skickar",
    youget: "Du får",
    howitworks: "Hur det fungerar",
    contact: "Kontakt",
    affiliateprogram: "Affiliate-program",
    faq: "FAQ",
    blog: "Blogg",
    aboutus: "Om oss",
    ordertracker: "Order Tracker",
    ourblog: "Vår blogg",
    ourpartners: "Våra partners",
    pressaboutus: "Tryck på Om oss",
    widgets: "Widgets",
    trackorder: "Spåra beställning",
    apidoc: "Api dokumentation",
    exchangelisting: "Exchange notering",
    allpairs: "Alla par",
    allcur: "Alla valutor"
  }

  //Chinese
  const lang_cn = {
    termofuse: "使用條款",
    privacypolicy: "隱私政策",
    exchangecrypto: "交换 Crypto",
    buycrypto: "买 Crypto",
    noextrafees: "无额外费用",
    estimated: "估计的",
    viewoffers: "查看优惠",
    freedom: "自由选择",
    yourexchange: "你的交流",
    bestrates: "最优价格",
    infiniteswipes: "无限掉期",
    getourwallet: "获取我们的钱包",
    watchtutorial: "观看教程",
    buycryptowith: "购买加密货币",
    selectapair: "选择一对",
    amount: "数量",
    selectexchange: "选择交易所",
    sortbyrate: "按比率排序",
    sortbyeta: "按预计到达时间排序",
    sortbyrating: "按评分排序",
    content: "币币交换为您提供来自与我们合作的掉期服务和交易所的兑换选项。如果我们合作伙伴的规则包含额外要求，例如 KYC 程序或浮动利率，我们将遵守它们。在开始交换之前，请仔细阅读所选合作伙伴的条款。",
    yousent: "你發",
    youget: "你得到",
    howitworks: "怎么运行的",
    contact: "接触",
    affiliateprogram: "会员计划",
    faq: "常问问题",
    blog: "博客",
    aboutus: "关于我们",
    ordertracker: "订单追踪器",
    ourblog: "我们的博客",
    ourpartners: "我们的同伴",
    pressaboutus: "关于我们",
    widgets: "小部件",
    trackorder: "跟踪订单",
    apidoc: "API 文档",
    exchangelisting: "交易所上市",
    allpairs: "所有对",
    allcur: "所有货币"
  }

  //Japanese
  const lang_jp = {
    termofuse: "利用規約",
    privacypolicy: "プライバシーポリシー",
    exchangecrypto: "交換 Crypto",
    buycrypto: "買う Crypto",
    noextrafees: "追加料金なし",
    estimated: "推定",
    viewoffers: "オファーを見る",
    freedom: "選択の自由",
    yourexchange: "あなたの交換",
    bestrates: "ベストレート",
    infiniteswipes: "無限スワップ",
    getourwallet: "ウォレットを入手",
    watchtutorial: "チュートリアルを見る",
    buycryptowith: "で暗号を購入する",
    selectapair: "ペアを選択",
    amount: "額",
    selectexchange: "取引所を選択",
    sortbyrate: "レートで並べ替え",
    sortbyeta: "到着予定時刻で並べ替え",
    sortbyrating: "評価順",
    content: "Coinoswap は、提携しているスワップ サービスと取引所から交換オプションを提供します。パートナーの規則に KYC 手順や変動金利などの追加要件が含まれている場合、当社はそれらに従います。交換を開始する前に、選択したパートナーの条件を注意深くお読みください。",
    yousent: "あなたが送る",
    youget: "あなたが得る",

    howitworks: "使い方",
    contact: "コンタクト",
    affiliateprogram: "アフィリエイトプログラム",
    faq: "よくある質問",
    blog: "ブログ",
    aboutus: "私たちに関しては",
    ordertracker: "注文トラッカー",
    ourblog: "私たちのブログ",
    ourpartners: "当社のパートナー",
    pressaboutus: "私たちについて",
    widgets: "ウィジェット",
    trackorder: "トラクトオーダー",
    apidoc: "API ドキュメント",
    exchangelisting: "取引所上場",
    allpairs: "すべてのペア",
    allcur: "すべての通貨"
  }

  //Urdu
  const lang_pk = {
    termofuse: "استعمال کی مدت",
    privacypolicy:"رازداری کی پالیسی",
    exchangecrypto: "کرپٹو کا تبادلہ کریں۔",
    buycrypto: "کریپٹو لیں",
    noextrafees: "کوئی اضافی فیس نہیں۔",
    estimated: "تخمینہ لگایا",
    viewoffers: "پیشکشیں دیکھیں",
    freedom: "انتخاب کرنے کی آزادی",
    yourexchange: "آپ کا تبادلہ",
    bestrates: "بہترین نرخ",
    infiniteswipes: "لامحدود تبادلہ",
    getourwallet: "ہمارا پرس حاصل کریں۔",
    watchtutorial: "ٹیوٹوریل دیکھیں",
    buycryptowith: "کے ساتھ کریپٹو خریدیں۔",
    selectapair: "ایک جوڑا منتخب کریں۔",
    amount: "رقم",
    selectexchange: "ایکسچینج کو منتخب کریں۔",
    sortbyrate: "شرح کے لحاظ سے ترتیب دیں۔",
    sortbyeta: "کے لحاظ سے ترتیب دیں ETA ۔",
    sortbyrating: "درجہ بندی کے لحاظ سے ترتیب دیں۔",
    content: "Coinoswap آپ کو سویپ سروسز اور تبادلے کے اختیارات فراہم کرتا ہے جن کے ساتھ ہم شراکت کرتے ہیں۔ اگر ہمارے پارٹنرز کے قواعد میں اضافی تقاضے ہیں، جیسے KYC طریقہ کار یا فلوٹنگ ریٹ، تو ہم ان کی پابندی کرتے ہیں۔ محتاط رہیں اور تبادلہ شروع کرنے سے پہلے منتخب پارٹنر کی شرائط پڑھیں۔",
    yousent: "آپ بھیج دیں۔",
    youget: "تم سمجھے",
    howitworks: "یہ کیسے کام کرتا ہے",
    contact: "رابطہ کریں۔",
    affiliateprogram: "ملحق پروگرام",
    faq: "عمومی سوالات",
    blog: "بلاگ",
    aboutus: "ہمارے بارے میں",
    ordertracker: "آرڈر ٹریکر",
    ourblog: "ہمارا بلاگ",
    ourpartners: "ہمارے پارٹنرز",
    pressaboutus: "ہمارے بارے میں دبائیں۔",
    widgets: "وجیٹس",
    trackorder: "ٹریکٹ آرڈر",
    apidoc: "API دستاویزات",
    exchangelisting: "ایکسچینج لسٹنگ",
    allpairs: "تمام جوڑے",
    allcur: "تمام کرنسیاں"
  }

  const lang_ru = {
    termofuse: "Условия пользования",
    privacypolicy:"политика конфиденциальности",
    exchangecrypto: "Обмен Crypto",
    buycrypto: "Купить Crypto",
    noextrafees: "Без дополнительных комиссий",
    estimated: "По оценкам",
    viewoffers: "ПОСМОТРЕТЬ ПРЕДЛОЖЕНИЯ",
    freedom: "Свобода выбора",
    yourexchange: "ваш обмен",
    bestrates: "Лучшие цены",
    infiniteswipes: "Бесконечные обмены",
    getourwallet: "Получите наш кошелек",
    watchtutorial: "Смотреть учебник",
    buycryptowith: "Купить криптовалюту с",
    selectapair: "Выберите пару",
    amount: "Количество",
    selectexchange: "Выберите обмен",
    sortbyrate: "Сортировать по рейтингу",
    sortbyeta: "Сортировать по ETA",
    sortbyrating: "Сортировать по рейтингу",
    content: "Coinoswap предоставляет вам варианты обмена из сервисов обмена и бирж, с которыми мы сотрудничаем. Если правила наших партнеров содержат дополнительные требования, такие как процедура KYC или плавающая ставка, мы их соблюдаем. Будьте внимательны и ознакомьтесь с условиями выбранного партнера, прежде чем начинать обмен.",
    yousent: "Вы отправляете",
    youget: "Вы получаете",
    howitworks: "Как это работает",
    contact: "Контакт",
    affiliateprogram: "Партнерская программа",
    faq: "часто задаваемые вопросы",
    blog: "Блог",
    aboutus: "О нас",
    ordertracker: "Отслеживание заказов",
    ourblog: "Наш блог",
    ourpartners: "Наши партнеры",
    pressaboutus: "Пресса О нас",
    widgets: "Виджеты",
    trackorder: "Tract Order",
    apidoc: "API документация",
    exchangelisting: "Листинг биржи",
    allpairs: "All pairs",
    allcur: "Все валюты"
  }

  const lang_tr = {
    termofuse: "Kullanım koşulu    ",
    privacypolicy:"Gizlilik Politikası    ",
    exchangecrypto: "Değiş tokuş Crypto",
    buycrypto: "Satın almak Crypto",
    noextrafees: "Ekstra ücret yok",
    estimated: "Tahmini",
    viewoffers: "TEKLİFLERİ GÖRÜNTÜLE",
    freedom: "seçme özgürlüğü",
    yourexchange: "takasın",
    bestrates: "En İyi Fiyatlar",
    infiniteswipes: "Sonsuz Takas",
    getourwallet: "Cüzdanımızı alın",
    watchtutorial: "Eğitimi izleyin",
    buycryptowith: "ile kripto satın al",
    selectapair: "bir çift seçin",
    amount: "Miktar",
    selectexchange: "Değişim Seç",
    sortbyrate: "Orana göre sırala",
    sortbyeta: "Göre sırala ETA",
    sortbyrating: "Derecelendirmeye göre sırala",
    content: "Coinoswap size takas hizmetlerinden ve ortak olduğumuz borsalardan takas seçenekleri sunar. Ortaklarımızın kuralları, KYC prosedürü veya değişken oran gibi ekstra gereksinimler içeriyorsa, onlara uyarız. Değişime başlamadan önce dikkatli olun ve seçilen iş ortağının şartlarını okuyun.",
    yousent: "Siz gönderin",
    youget: "sen alırsın",
    howitworks: "Nasıl çalışır",
    contact: "Temas",
    affiliateprogram: "Ortaklık Programı",
    faq: "SSS",
    blog: "Blog",
    aboutus: "Hakkımızda",
    ordertracker: "Sipariş Takibi",
    ourblog: "Blogumuz",
    ourpartners: "Our Partners",
    pressaboutus: "Hakkımızda Basın",
    widgets: "Widget'lar",
    trackorder: "Broşür Siparişi",
    apidoc: "Api Belgeler",
    exchangelisting: "Değişim Listesi",
    allpairs: "tüm çiftler",
    allcur: "Tüm para birimleri"
  }

  const lang_sa = {
    termofuse: "شروط الاستخدام",
    privacypolicy:"سياسة الخصوصية",
    exchangecrypto: "Crypto تبادل",
    buycrypto: "Crypto يشتري",
    noextrafees: "لا توجد رسوم إضافية",
    estimated: "مُقدَّر",
    viewoffers: "مشاهدة العروض",
    freedom: "حرية الاختيار",
    yourexchange: "التبادل الخاص بك",
    bestrates: "أفضل الأسعار",
    infiniteswipes: "مقايضات لانهائية",
    getourwallet: "احصل على محفظتنا",
    watchtutorial: "مشاهدة البرنامج التعليمي",
    buycryptowith: "شراء العملات المشفرة مع",
    selectapair: "اختر زوجًا",
    amount: "مقدار",
    selectexchange: "حدد تبادل",
    sortbyrate: "الترتيب حسب المعدل",
    sortbyeta: "ETA ترتيب حسب ",
    sortbyrating: "الترتيب حسب التصنيف",
    content: "يوفر لك Coinoswap خيارات التبادل من خدمات المبادلة والتبادلات التي نتشارك معها. إذا كانت قواعد شركائنا تحتوي على متطلبات إضافية ، مثل إجراء اعرف عميلك أو معدل عائم ، فإننا نطيعها. كن حذرًا واقرأ شروط الشريك المحدد قبل أن تبدأ التبادل",
    yousent: "انت ارسل",
    youget: "لقد حصلت",
    howitworks: "كيف تعمل",
    contact: "اتصال",
    affiliateprogram: "إنضم لبرنامج",
    faq: "التعليمات",
    blog: "مدونة او مذكرة",
    aboutus: "معلومات عنا",
    ordertracker: "تعقب النظام",
    ourblog: "مدونتنا",
    ourpartners: "شركاؤنا",
    pressaboutus: "اضغط من نحن",
    widgets: "الحاجيات",
    trackorder: "ترتيب المسالك",
    apidoc: "توثيق API",
    exchangelisting: "قائمة الصرف",
    allpairs: "كل أزواج",
    allcur: "جميع العملات"
  }


  // BEM convention
  return (
    <div className="bg-color margin-bottom-50">

      <Navbar className="bg-color" expand="lg">
        <Container className="nav-padding">
          <Link to="/"><Navbar.Brand href="/" className="image-position">
            <img
              src={logo}
              className="img-fluid rounded"
              style={{ width: "130px" }}
              alt=""
            />
          </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-white nav-text" to="/works"> {lang.howitworks}</NavLink>
              <NavLink className="text-white nav-text" to="/contactus">{lang.contact}</NavLink>
              <NavLink className="text-white nav-text" to="/">{lang.affiliateprogram}</NavLink>
              <NavLink className="text-white nav-text" to="/Faqs">{lang.faq}</NavLink>
              <NavLink className="text-white nav-text" to="/">{lang.blog}</NavLink>
              <NavLink className="text-white nav-text" to="/">{lang.aboutus}</NavLink>

              <NavDropdown title={lang.ordertracker} id="collasible-nav-dropdown" className="text-white nav-color d-inline-block navitem navbar2">
                <div className="navitem navbar2" id="collasible-nav-dropdown" data-v-bc252f18="" data-v-2b84fbf9="" > 
                <div data-v-bc252f18="" className=" swap-tracker app__swap-tracker swap-tracker_shadow">
                  <div data-v-cc6e0960="" data-v-bc252f18="" class="">
                  <form data-v-cc6e0960="" id="order_tracker">
                    <label data-v-249899d1="" data-v-cc6e0960="" for="VJnwu5" class="form-input swap-tracker-form__input form-input_dark form-input_md">
                      <span data-v-249899d1="" class="form-input__label"></span>
                      <span data-v-249899d1="" class="form-input__wrapper">
                        <input data-v-249899d1="" id="VJnwu5" spellcheck="false" max="Infinity" min="-Infinity" placeholder="Enter exchange ID" step="any" trim="true" type="text" autocomplete="off" lang="en" class="form-input__input" />
                      </span>
                    </label> 
                    <button data-v-3411e120="" data-v-cc6e0960="" type="submit" class="button swap-tracker-form__button button_md button_primary button_uppercase button_rounded">
                      Track your swap
                    </button>
                  </form>
                  </div>
                    </div>
                  </div>

              </NavDropdown>


            </Nav>
            <Nav className="ms-auto">
              <div
                style={{ margin: "auto", paddingTop: "10px", textAlign: "end" }}
                className="col-lg-2 col-md-2 col-sm-12">
                <Link to="">


                  <div>
                    <ReactFlagsSelect
                      selectedSize={18}
                      optionsSize={14}
                      fullWidth={false}
                      // default="IT"
                      showOptionLabel={true}
                      showSelectedLabel={false}
                      alignOptionsToRight={true}
                      selected={select}
                      onSelect={onSelect}
                      disabled={false}
                      countries={["US", "GB", "ES", "FR", "DE", "IT", "PT", "SE", "CN", "JP", "PK", "RU", "TR", "SA"]}
                      customLabels={{ US: "EN-US", GB: "EN-GB", ES: "Español", FR: "Française", DE: "Deutch", IT: "Italiana", PT: "Português", SE: "Svenska", CN: "中国人", JP: "日本", PK: "اردو", RU: "Pусский", TR: "Türk", SA: "عربى" }} />
                  </div>



                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbarr;
