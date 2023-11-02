import { createSlice } from "@reduxjs/toolkit";

const language = {
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
  content:
    "Coinoswap provides you with exchange options from the swap services and exchanges we partner with. If our partners’ rules contain extra requirements, such as KYC procedure or floating rate, we obey them. Be careful and read the selected partner's terms before you start an exchange.",
  yousent: "You sent",
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
  allcur: "All currencies",
};

export const offerSlice = createSlice({
  name: "offers",
  initialState: {
    init_get_currency: "1",
    inputcur: "",
    selcur: "btc",
    getcur: "eth",
    amountcur: 0.1,
    getamount:0,
    lang: language,
    langcode: "US",
    withdrawaddress: "",
    exchangename: "",
    sendindex:"",
    getindex:"",
    amount_to:"",

    //****************************** Coins Data ***************************//
    coins:[],

    //*************************** Exchange Info ***************************//

    recipient_wallet_address:undefined,
    sending_wallet_address:undefined,
    transaction_id:undefined,
    
    changenow_fixed_rateid:undefined,
    changehero_fixed_rateid:undefined,
    stealthio_fixed_rateid:undefined,
    changelly_fixed_rateid:undefined,

    //*************************** Exchange Response Info ***************************//

    exchangename:undefined
},


  reducers: {
    //*************************** Exchange Info ***************************//

    //****************************** Coins Data ***************************//
    set_coins:(state, action)=>{
      state.coins=action.payload;
    },
    
    set_amount_to:(state, action)=>{
      state.amount_to = action.payload;
    },
    
    set_recipient_wallet_address: (state, action) => {
      state.recipient_wallet_address = action.payload;
    },
    set_sending_wallet_address: (state, action) => {
      state.sending_wallet_address = action.payload;
    },
    set_transaction_id: (state, action) => {
      state.transaction_id = action.payload;
    },
    set_order_id: (state, action) => {
      state.orderid = action.payload;
    },
    set_exchangename: (state, action) => {
      state.exchangename = action.payload;
    },

    set_changenow_fixed_rateid: (state, action) =>{
      state.changenow_fixed_rateid=action.payload;
    },

    set_changehero_fixed_rateid:(state, action)=>{
      state.changehero_fixed_rateid=action.payload;
    },

    set_stealthio_fixed_rateid:(state, action)=>{
      state.stealthio_fixed_rateid=action.payload;
    },

    set_changelly_fixed_rateid:(state, action)=>{
      state.changelly_fixed_rateid=action.payload;
    },

    
    //********************************************************************//

    setgetamount: (state, action) => {
      state.getamount = action.payload;
    },
    setsendindex: (state, action) => {
      state.sendindex = action.payload;
    },
    setgetindex: (state, action) => {
      state.getindex = action.payload;
    },
    set_init_get_currency: (state, action) => {
      state.init_get_currency = action.payload;
    },

    set_selcur: (state, action) => {
      state.selcur = action.payload;
    },

    set_getcur: (state, action) => {
      state.getcur = action.payload;
    },
    set_amountcur: (state, action) => {
      state.amountcur = action.payload;
    },

    set_lang: (state, action) => {
      state.lang = action.payload;
    },

    set_langcode: (state, action) => {
      state.langcode = action.payload;
    },

    set_withdrawaddress: (state, action) => {
      state.withdrawaddress = action.payload;
    },

    set_exchangename: (state, action) => {
      state.exchangename = action.payload;
    },
    set_inputcur: (state, action) => {
      state.inputcur = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  set_recipient_wallet_address,
  set_sending_wallet_address,
  set_transaction_id,
  set_order_id,
  set_exchangename,
  set_amount_to,


  set_init_get_currency,
  set_selcur,
  set_getcur,
  set_amountcur,
  set_lang,
  set_langcode,
  set_withdrawaddress,
  set_inputcur,
  setsendindex,
  setgetindex,
  setgetamount,

  set_changenow_fixed_rateid,
  set_changehero_fixed_rateid,
  set_stealthio_fixed_rateid,
  set_changelly_fixed_rateid


} = offerSlice.actions;

export default offerSlice.reducer;
