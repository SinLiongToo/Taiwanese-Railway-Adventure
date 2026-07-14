// ==========================================
// 1. 全台環島鐵路車站資料庫 (All Taiwan Cities)
// ==========================================
const stations = [
    {
        "id": "keelung",
        "nameZH": "基隆",
        "nameEN": "Keelung",
        "poj": "Kî-liông",
        "cx": 200,
        "cy": 50,
        "dist": 0,
        "stamp": "⚓",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-badu",
        "nameZH": "八堵",
        "nameEN": "Badu",
        "poj": "Pat-tóo",
        "cx": 185,
        "cy": 53,
        "dist": 4,
        "stamp": "🚉",
        "line": "TRA",
        "isMain": false,
        "audioId": "20751(1)"
    },
    {
        "id": "tra-nuannuan",
        "nameZH": "暖暖",
        "nameEN": "Nuannuan",
        "poj": "Luán-luán",
        "cx": 195,
        "cy": 62,
        "dist": 8,
        "stamp": "🌊",
        "line": "TRA",
        "isMain": false,
        "audioId": "20753(1)"
    },
    {
        "id": "tra-ruifang",
        "nameZH": "瑞芳",
        "nameEN": "Ruifang",
        "poj": "Sūi-hong",
        "cx": 202,
        "cy": 70,
        "dist": 15,
        "stamp": "⛏️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20755(1)"
    },
    {
        "id": "tra-shuangxi",
        "nameZH": "雙溪",
        "nameEN": "雙溪",
        "poj": "Siang-khoe",
        "cx": 205,
        "cy": 78,
        "dist": 22,
        "stamp": "🏞️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20759(1)"
    },
    {
        "id": "tra-fulong",
        "nameZH": "福隆",
        "nameEN": "Fulong",
        "poj": "Hok-liông",
        "cx": 208,
        "cy": 85,
        "dist": 29,
        "stamp": "🏖️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20761(1)"
    },
    {
        "id": "yilan",
        "nameZH": "宜蘭",
        "nameEN": "Yilan",
        "poj": "Gî-lân",
        "cx": 200,
        "cy": 105,
        "dist": 60,
        "stamp": "🥣",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-suao",
        "nameZH": "蘇澳",
        "nameEN": "Su'ao",
        "poj": "So-ò",
        "cx": 201,
        "cy": 125,
        "dist": 75,
        "stamp": "⚓",
        "line": "TRA",
        "isMain": false,
        "audioId": "20777(1)"
    },
    {
        "id": "tra-dongao",
        "nameZH": "東澳",
        "nameEN": "Dong'ao",
        "poj": "Tang-ò",
        "cx": 202,
        "cy": 155,
        "dist": 95,
        "stamp": "🌊",
        "line": "TRA",
        "isMain": false,
        "audioId": "20780(1)"
    },
    {
        "id": "tra-hsincheng",
        "nameZH": "新城",
        "nameEN": "Hsincheng",
        "poj": "Sin-siâⁿ",
        "cx": 204,
        "cy": 190,
        "dist": 120,
        "stamp": "🌺",
        "line": "TRA",
        "isMain": false,
        "audioId": "20787(1)"
    },
    {
        "id": "hualien",
        "nameZH": "花蓮",
        "nameEN": "Hualien",
        "poj": "Hua-liân",
        "cx": 205,
        "cy": 220,
        "dist": 140,
        "stamp": "⛰️",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-jian",
        "nameZH": "吉安",
        "nameEN": "Ji'an",
        "poj": "Kiat-an",
        "cx": 204,
        "cy": 226,
        "dist": 148,
        "stamp": "🌾",
        "line": "TRA",
        "isMain": false,
        "audioId": "20791(1)"
    },
    {
        "id": "tra-shoufeng",
        "nameZH": "壽豐",
        "nameEN": "Shoufeng",
        "poj": "Siū-hong",
        "cx": 203,
        "cy": 235,
        "dist": 158,
        "stamp": "🌿",
        "line": "TRA",
        "isMain": false,
        "audioId": "20794(1)"
    },
    {
        "id": "tra-fuyuan",
        "nameZH": "富源",
        "nameEN": "Fuyuan",
        "poj": "Hù-gôan",
        "cx": 202,
        "cy": 245,
        "dist": 172,
        "stamp": "🌊",
        "line": "TRA",
        "isMain": false,
        "audioId": "20801(1)"
    },
    {
        "id": "tra-yuli",
        "nameZH": "玉里",
        "nameEN": "Yuli",
        "poj": "Gio̍k-lí",
        "cx": 200,
        "cy": 260,
        "dist": 190,
        "stamp": "💎",
        "line": "TRA",
        "isMain": false,
        "audioId": "20805(1)"
    },
    {
        "id": "tra-fuli",
        "nameZH": "富里",
        "nameEN": "Fuli",
        "poj": "Hù-lí",
        "cx": 196,
        "cy": 280,
        "dist": 210,
        "stamp": "🌾",
        "line": "TRA",
        "isMain": false,
        "audioId": "20809(1)"
    },
    {
        "id": "tra-chishang",
        "nameZH": "池上",
        "nameEN": "Chishang",
        "poj": "Tî-siōng",
        "cx": 193,
        "cy": 300,
        "dist": 225,
        "stamp": "🍱",
        "line": "TRA",
        "isMain": false,
        "audioId": "20810(1)"
    },
    {
        "id": "tra-guanshan",
        "nameZH": "關山",
        "nameEN": "Guanshan",
        "poj": "Kuan-san",
        "cx": 189,
        "cy": 320,
        "dist": 245,
        "stamp": "🌄",
        "line": "TRA",
        "isMain": false,
        "audioId": "20812(1)"
    },
    {
        "id": "tra-luye",
        "nameZH": "鹿野",
        "nameEN": "Luye",
        "poj": "Lo̍k-iá",
        "cx": 185,
        "cy": 340,
        "dist": 265,
        "stamp": "🦌",
        "line": "TRA",
        "isMain": false,
        "audioId": "20816(1)"
    },
    {
        "id": "taitung",
        "nameZH": "台東",
        "nameEN": "Taitung",
        "poj": "Tâi-tang",
        "cx": 180,
        "cy": 360,
        "dist": 290,
        "stamp": "🎈",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-zhiben",
        "nameZH": "知本",
        "nameEN": "Jhiben",
        "poj": "Ti-pún",
        "cx": 168,
        "cy": 395,
        "dist": 310,
        "stamp": "♨️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20830(1)"
    },
    {
        "id": "tra-dawu",
        "nameZH": "大武",
        "nameEN": "Dawu",
        "poj": "Tāi-bú",
        "cx": 145,
        "cy": 435,
        "dist": 350,
        "stamp": "⛰️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20825(1)"
    },
    {
        "id": "pingtung",
        "nameZH": "屏東",
        "nameEN": "屏東",
        "poj": "Pîn-tong",
        "cx": 98,
        "cy": 438,
        "dist": 450,
        "stamp": "🍍",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-linbian",
        "nameZH": "林邊",
        "nameEN": "Linbian",
        "poj": "Nâ-pinn",
        "cx": 112,
        "cy": 455,
        "dist": 462,
        "stamp": "🌿",
        "line": "TRA",
        "isMain": false,
        "audioId": "20740(1)"
    },
    {
        "id": "tra-donggang",
        "nameZH": "東港",
        "nameEN": "Donggang",
        "poj": "Tang-káng",
        "cx": 116,
        "cy": 465,
        "dist": 470,
        "stamp": "🚢",
        "line": "TRA",
        "isMain": false
    },
    {
        "id": "tra-renwu",
        "nameZH": "仁武",
        "nameEN": "Renwu",
        "poj": "Jîn-bú",
        "cx": 84,
        "cy": 412,
        "dist": 485,
        "stamp": "🏘️",
        "line": "TRA",
        "isMain": false
    },
    {
        "id": "tra-fengshan",
        "nameZH": "鳳山",
        "nameEN": "Fengshan",
        "poj": "Hōng-san",
        "cx": 91,
        "cy": 425,
        "dist": 495,
        "stamp": "⛩️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20727(1)"
    },
    {
        "id": "kaohsiung",
        "nameZH": "高雄",
        "nameEN": "高雄",
        "poj": "Ko-hiông",
        "cx": 78,
        "cy": 400,
        "dist": 510,
        "stamp": "🚢",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-zuoying",
        "nameZH": "左營",
        "nameEN": "Zuoying",
        "poj": "Chó-iâⁿ",
        "cx": 76,
        "cy": 394,
        "dist": 518,
        "stamp": "⚓",
        "line": "TRA",
        "isMain": false,
        "transferId": "zuoying",
        "audioId": "20704(1)"
    },
    {
        "id": "tra-nanzih",
        "nameZH": "楠梓",
        "nameEN": "Nanzih",
        "poj": "Lâm-chú",
        "cx": 74,
        "cy": 388,
        "dist": 524,
        "stamp": "🌳",
        "line": "TRA",
        "isMain": false,
        "audioId": "20703(1)"
    },
    {
        "id": "tra-gangshan",
        "nameZH": "岡山",
        "nameEN": "Gangshan",
        "poj": "Kong-san",
        "cx": 71,
        "cy": 379,
        "dist": 532,
        "stamp": "🌾",
        "line": "TRA",
        "isMain": false,
        "audioId": "20701(1)"
    },
    {
        "id": "tra-dahu",
        "nameZH": "大湖",
        "nameEN": "Dahu",
        "poj": "Tāi-ôo",
        "cx": 68,
        "cy": 370,
        "dist": 540,
        "stamp": "🌊",
        "line": "TRA",
        "isMain": false,
        "audioId": "20699(1)"
    },
    {
        "id": "tra-baoan",
        "nameZH": "保安",
        "nameEN": "Bao'an",
        "poj": "Pó-an",
        "cx": 66,
        "cy": 362,
        "dist": 548,
        "stamp": "🛡️",
        "line": "TRA",
        "isMain": false
    },
    {
        "id": "tainan",
        "nameZH": "台南",
        "nameEN": "Tainan",
        "poj": "Tâi-lâm",
        "cx": 65,
        "cy": 350,
        "dist": 558,
        "stamp": "🏯",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-shalun",
        "nameZH": "沙崙",
        "nameEN": "Shalun",
        "poj": "Sua-lūn",
        "cx": 66,
        "cy": 360,
        "dist": 566,
        "stamp": "🏞️",
        "line": "TRA",
        "isMain": false,
        "transferId": "tainan",
        "audioId": "331(4)"
    },
    {
        "id": "tra-yongkang",
        "nameZH": "永康",
        "nameEN": "Yongkang",
        "poj": "Íng-khong",
        "cx": 65,
        "cy": 343,
        "dist": 574,
        "stamp": "🌆",
        "line": "TRA",
        "isMain": false,
        "audioId": "20695(1)"
    },
    {
        "id": "tra-xinshi",
        "nameZH": "新市",
        "nameEN": "Xinshi",
        "poj": "Sin-tshī",
        "cx": 66,
        "cy": 336,
        "dist": 582,
        "stamp": "🏙️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20694(1)"
    },
    {
        "id": "tra-shanhua",
        "nameZH": "善化",
        "nameEN": "善化",
        "poj": "Siān-hoà",
        "cx": 67,
        "cy": 328,
        "dist": 590,
        "stamp": "🏯",
        "line": "TRA",
        "isMain": false,
        "audioId": "20693(1)"
    },
    {
        "id": "tra-liuying",
        "nameZH": "柳營",
        "nameEN": "Liuying",
        "poj": "Liú-iâⁿ",
        "cx": 68,
        "cy": 318,
        "dist": 598,
        "stamp": "🌿",
        "line": "TRA",
        "isMain": false,
        "audioId": "20689(1)"
    },
    {
        "id": "tra-xinying",
        "nameZH": "新營",
        "nameEN": "Xinying",
        "poj": "Sin-iâⁿ",
        "cx": 69,
        "cy": 308,
        "dist": 608,
        "stamp": "⛩️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20688(1)"
    },
    {
        "id": "chiayi",
        "nameZH": "嘉義",
        "nameEN": "Chiayi",
        "poj": "Ka-gī",
        "cx": 70,
        "cy": 295,
        "dist": 620,
        "stamp": "🪵",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-dounan",
        "nameZH": "斗南",
        "nameEN": "Dounan",
        "poj": "Táu-lâm",
        "cx": 70,
        "cy": 288,
        "dist": 630,
        "stamp": "🌽",
        "line": "TRA",
        "isMain": false,
        "audioId": "20680(1)"
    },
    {
        "id": "tra-douliu",
        "nameZH": "斗六",
        "nameEN": "Douliu",
        "poj": "Táu-la̍k",
        "cx": 71,
        "cy": 282,
        "dist": 640,
        "stamp": "🏙️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20679(1)"
    },
    {
        "id": "tra-linnei",
        "nameZH": "林內",
        "nameEN": "Linnei",
        "poj": "Nâ-lāi",
        "cx": 71,
        "cy": 276,
        "dist": 650,
        "stamp": "🌿",
        "line": "TRA",
        "isMain": false,
        "audioId": "20677(1)"
    },
    {
        "id": "tra-ershui",
        "nameZH": "二水",
        "nameEN": "Ershui",
        "poj": "Jī-tsuí",
        "cx": 72,
        "cy": 268,
        "dist": 658,
        "stamp": "🌊",
        "line": "TRA",
        "isMain": false,
        "audioId": "20676(1)"
    },
    {
        "id": "tra-tianzhong",
        "nameZH": "田中",
        "nameEN": "Tianzhong",
        "poj": "Tshân-tiong",
        "cx": 73,
        "cy": 262,
        "dist": 666,
        "stamp": "🌾",
        "line": "TRA",
        "isMain": false,
        "audioId": "20675(1)"
    },
    {
        "id": "tra-yuanlin",
        "nameZH": "員林",
        "nameEN": "Yuanlin",
        "poj": "Uân-lîm",
        "cx": 74,
        "cy": 250,
        "dist": 678,
        "stamp": "🌳",
        "line": "TRA",
        "isMain": false,
        "audioId": "20672(1)"
    },
    {
        "id": "changhua",
        "nameZH": "彰化",
        "nameEN": "Changhua",
        "poj": "Chiong-hoà",
        "cx": 75,
        "cy": 235,
        "dist": 690,
        "stamp": "🪷",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-wuri",
        "nameZH": "烏日",
        "nameEN": "Wuri",
        "poj": "O͘-ji̍t",
        "cx": 79,
        "cy": 218,
        "dist": 698,
        "stamp": "🌞",
        "line": "TRA",
        "isMain": false,
        "transferId": "taichung",
        "audioId": "20668(1)"
    },
    {
        "id": "tra-daqing",
        "nameZH": "大慶",
        "nameEN": "Daqing",
        "poj": "Tāi-khìng",
        "cx": 82,
        "cy": 208,
        "dist": 704,
        "stamp": "🏙️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20667(1)"
    },
    {
        "id": "taichung",
        "nameZH": "台中",
        "nameEN": "Taichung",
        "poj": "Tâi-tiong",
        "cx": 85,
        "cy": 200,
        "dist": 712,
        "stamp": "⛲",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-fengyuan",
        "nameZH": "豐原",
        "nameEN": "豐原",
        "poj": "Hong-gôan",
        "cx": 83,
        "cy": 188,
        "dist": 722,
        "stamp": "🍑",
        "line": "TRA",
        "isMain": false,
        "audioId": "20664(1)"
    },
    {
        "id": "tra-sanyi",
        "nameZH": "三義",
        "nameEN": "Sanyi",
        "poj": "Sam-gī",
        "cx": 82,
        "cy": 175,
        "dist": 732,
        "stamp": "🌲",
        "line": "TRA",
        "isMain": false,
        "audioId": "20661(1)"
    },
    {
        "id": "tra-tongluo",
        "nameZH": "銅鑼",
        "nameEN": "Tongluo",
        "poj": "Tâng-lô",
        "cx": 81,
        "cy": 162,
        "dist": 742,
        "stamp": "🔔",
        "line": "TRA",
        "isMain": false,
        "audioId": "2381(2)"
    },
    {
        "id": "miaoli",
        "nameZH": "苗栗",
        "nameEN": "苗栗",
        "poj": "Biâu-le̍k",
        "cx": 80,
        "cy": 150,
        "dist": 752,
        "stamp": "🍓",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-toufen",
        "nameZH": "頭份",
        "nameEN": "Toufen",
        "poj": "Thâu-hūn",
        "cx": 84,
        "cy": 138,
        "dist": 762,
        "stamp": "🏔️",
        "line": "TRA",
        "isMain": false
    },
    {
        "id": "tra-chunan",
        "nameZH": "竹南",
        "nameEN": "竹南",
        "poj": "Tek-lâm",
        "cx": 86,
        "cy": 128,
        "dist": 772,
        "stamp": "🎋",
        "line": "TRA",
        "isMain": false,
        "audioId": "20655(1)"
    },
    {
        "id": "tra-liujia",
        "nameZH": "六家",
        "nameEN": "Liujia",
        "poj": "La̍k-ke",
        "cx": 91,
        "cy": 118,
        "dist": 782,
        "stamp": "🏡",
        "line": "TRA",
        "isMain": false,
        "transferId": "hsinchu",
        "audioId": "28089(1)"
    },
    {
        "id": "hsinchu",
        "nameZH": "新竹",
        "nameEN": "Hsinchu",
        "poj": "Sin-tek",
        "cx": 95,
        "cy": 110,
        "dist": 792,
        "stamp": "🔬",
        "line": "TRA",
        "isMain": true
    },
    {
        "id": "tra-zhubei",
        "nameZH": "竹北",
        "nameEN": "Zhubei",
        "poj": "Tek-pak",
        "cx": 102,
        "cy": 105,
        "dist": 800,
        "stamp": "🏙️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20651(1)"
    },
    {
        "id": "tra-hukou",
        "nameZH": "湖口",
        "nameEN": "湖口",
        "poj": "Ôo-kháu",
        "cx": 108,
        "cy": 100,
        "dist": 808,
        "stamp": "🏭",
        "line": "TRA",
        "isMain": false,
        "audioId": "20649(1)"
    },
    {
        "id": "tra-yangmei",
        "nameZH": "楊梅",
        "nameEN": "楊梅",
        "poj": "Iûⁿ-mn̂g",
        "cx": 115,
        "cy": 94,
        "dist": 818,
        "stamp": "🍑",
        "line": "TRA",
        "isMain": false,
        "audioId": "20647(1)"
    },
    {
        "id": "tra-zhongli",
        "nameZH": "中壢",
        "nameEN": "中壢",
        "poj": "Tiong-le̍k",
        "cx": 122,
        "cy": 88,
        "dist": 828,
        "stamp": "🌆",
        "line": "TRA",
        "isMain": false,
        "audioId": "20645(1)"
    },
    {
        "id": "taoyuan",
        "nameZH": "桃園",
        "nameEN": "Taoyuan",
        "poj": "Thô-hn̂g",
        "cx": 130,
        "cy": 82,
        "dist": 838,
        "stamp": "✈️",
        "line": "TRA",
        "isMain": true,
        "transferId": "taoyuan"
    },
    {
        "id": "tra-yingge",
        "nameZH": "鶯歌",
        "nameEN": "鶯歌",
        "poj": "Ing-ko",
        "cx": 138,
        "cy": 79,
        "dist": 846,
        "stamp": "🏺",
        "line": "TRA",
        "isMain": false,
        "audioId": "20642(1)"
    },
    {
        "id": "tra-sanxia",
        "nameZH": "三峽",
        "nameEN": "三峽",
        "poj": "Sam-kiap",
        "cx": 134,
        "cy": 80,
        "dist": 850,
        "stamp": "🏘️",
        "line": "TRA",
        "isMain": false
    },
    {
        "id": "tra-banqiao",
        "nameZH": "板橋",
        "nameEN": "板橋",
        "poj": "Pang-kiô",
        "cx": 148,
        "cy": 76,
        "dist": 856,
        "stamp": "🌉",
        "line": "TRA",
        "isMain": false,
        "transferId": "banqiao",
        "audioId": "20639(1)"
    },
    {
        "id": "tra-wanhua",
        "nameZH": "萬華",
        "nameEN": "萬華",
        "poj": "Bān-huà",
        "cx": 155,
        "cy": 72,
        "dist": 862,
        "stamp": "🏮",
        "line": "TRA",
        "isMain": false,
        "audioId": "20638(1)"
    },
    {
        "id": "taipei",
        "nameZH": "台北",
        "nameEN": "台北",
        "poj": "Tâi-pak",
        "cx": 165,
        "cy": 68,
        "dist": 866,
        "stamp": "🏢",
        "line": "TRA",
        "isMain": true,
        "transferId": "taipei"
    },
    {
        "id": "tra-qingshui",
        "nameZH": "清水",
        "nameEN": "清水",
        "poj": "Tshin-tsuí",
        "cx": 70,
        "cy": 180,
        "dist": 700,
        "stamp": "💧",
        "line": "TRA",
        "isMain": false,
        "audioId": "752(4)"
    },
    {
        "id": "tra-shalu",
        "nameZH": "沙鹿",
        "nameEN": "沙鹿",
        "poj": "Sua-lo̍k",
        "cx": 69,
        "cy": 195,
        "dist": 704,
        "stamp": "🏖️",
        "line": "TRA",
        "isMain": false,
        "audioId": "20720(1)"
    },
    {
        "id": "tra-longjing",
        "nameZH": "龍井",
        "nameEN": "龍井",
        "poj": "Liông-tsínn",
        "cx": 68,
        "cy": 210,
        "dist": 708,
        "stamp": "🐉",
        "line": "TRA",
        "isMain": false,
        "audioId": "20721(1)"
    },
    {
        "id": "hsr-nangang",
        "nameZH": "南港",
        "nameEN": "Nangang",
        "poj": "Lâm-káng",
        "cx": 220,
        "cy": 55,
        "dist": 0,
        "stamp": "🏙️",
        "line": "HSR",
        "isMain": false,
        "transferId": "nangang",
        "audioId": "21389(1)"
    },
    {
        "id": "hsr-taipei",
        "nameZH": "台北",
        "nameEN": "Taipei",
        "poj": "Tâi-pak",
        "cx": 172,
        "cy": 62,
        "dist": 9,
        "stamp": "🏢",
        "line": "HSR",
        "isMain": false,
        "transferId": "taipei",
        "audioId": "20637(1)"
    },
    {
        "id": "hsr-banqiao",
        "nameZH": "板橋",
        "nameEN": "Banqiao",
        "poj": "Pang-kiô",
        "cx": 154,
        "cy": 70,
        "dist": 16,
        "stamp": "🌉",
        "line": "HSR",
        "isMain": false,
        "transferId": "banqiao",
        "audioId": "20639(1)"
    },
    {
        "id": "hsr-taoyuan",
        "nameZH": "桃園",
        "nameEN": "Taoyuan",
        "poj": "Thô-hn̂g",
        "cx": 122,
        "cy": 78,
        "dist": 36,
        "stamp": "✈️",
        "line": "HSR",
        "isMain": false,
        "transferId": "taoyuan",
        "audioId": "20643(1)"
    },
    {
        "id": "hsr-hsinchu",
        "nameZH": "新竹",
        "nameEN": "Hsinchu",
        "poj": "Sin-tek",
        "cx": 90,
        "cy": 104,
        "dist": 64,
        "stamp": "🔬",
        "line": "HSR",
        "isMain": false,
        "transferId": "hsinchu",
        "audioId": "20652(1)"
    },
    {
        "id": "hsr-miaoli",
        "nameZH": "苗栗",
        "nameEN": "Miaoli",
        "poj": "Biâu-le̍k",
        "cx": 72,
        "cy": 144,
        "dist": 95,
        "stamp": "🍓",
        "line": "HSR",
        "isMain": false,
        "audioId": "20658(1)"
    },
    {
        "id": "hsr-taichung",
        "nameZH": "台中",
        "nameEN": "Taichung",
        "poj": "Tâi-tiong",
        "cx": 78,
        "cy": 196,
        "dist": 121,
        "stamp": "⛲",
        "line": "HSR",
        "isMain": false,
        "transferId": "taichung",
        "audioId": "20666(1)"
    },
    {
        "id": "hsr-changhua",
        "nameZH": "彰化",
        "nameEN": "Changhua",
        "poj": "Chiong-hoà",
        "cx": 68,
        "cy": 230,
        "dist": 141,
        "stamp": "🪷",
        "line": "HSR",
        "isMain": false,
        "audioId": "20670(1)"
    },
    {
        "id": "hsr-yunlin",
        "nameZH": "雲林",
        "nameEN": "Yunlin",
        "poj": "Hûn-lîm",
        "cx": 62,
        "cy": 265,
        "dist": 168,
        "stamp": "☁️",
        "line": "HSR",
        "isMain": false
    },
    {
        "id": "hsr-chiayi",
        "nameZH": "嘉義",
        "nameEN": "Chiayi",
        "poj": "Ka-gī",
        "cx": 60,
        "cy": 295,
        "dist": 200,
        "stamp": "🪵",
        "line": "HSR",
        "isMain": false,
        "audioId": "20684(1)"
    },
    {
        "id": "hsr-tainan",
        "nameZH": "台南",
        "nameEN": "Tainan",
        "poj": "Tâi-lâm",
        "cx": 56,
        "cy": 345,
        "dist": 260,
        "stamp": "🏯",
        "line": "HSR",
        "isMain": false,
        "transferId": "tainan",
        "audioId": "20696(1)"
    },
    {
        "id": "hsr-zuoying",
        "nameZH": "左營",
        "nameEN": "Zuoying (HSR)",
        "poj": "Chó-iâⁿ",
        "cx": 66,
        "cy": 395,
        "dist": 311,
        "stamp": "🚄",
        "line": "HSR",
        "isMain": false,
        "transferId": "zuoying",
        "audioId": "20704(1)"
    }
];

// ==========================================
// 1b. 台鐵各小站資料庫 (TRA Small Stations)
// ==========================================
const traSmallStations = [];

// ==========================================
// 1c. 高鐵車站資料庫 (Taiwan HSR Stations)
// ==========================================
const hsrStations = [];

const totalCircumference = 870; // 宜蘭到基隆 60km，總長 870km

// ==========================================
// 2. 交通台語詞彙庫 (漢字與台羅拼音對照)
// ==========================================
const vocabData = [
    { zh: "火車", tw: "hoé-chhia", en: "Train", emoji: " Train 🚄", type: "vehicles" },
    { zh: "捷運", tw: "chia̍t-ūn", en: "MRT/Metro", emoji: " Metro 🚇", type: "vehicles" },
    { zh: "公車", tw: "kong-chhia", en: "Bus", emoji: " Bus 🚌", type: "vehicles" },
    { zh: "飛機", tw: "poe-ki", en: "Airplane", emoji: " Plane ✈️", type: "vehicles" },
    { zh: "鐵馬", tw: "thih-bé", en: "Bicycle", emoji: " Bike 🚲", type: "vehicles" },
    { zh: "船", tw: "chûn", en: "Ship/Boat", emoji: " Ship 🚢", type: "vehicles" },
    { zh: "計程車", tw: "kè-thêng-chhia", en: "Taxi", emoji: " Taxi 🚕", type: "vehicles" },
    { zh: "高鐵", tw: "ko-thih", en: "HSR", emoji: " Bullet 🚅", type: "vehicles" },
    { zh: "月台", tw: "gue̍h-tâi", en: "Platform", emoji: " Platform 🚉", type: "stations" },
    { zh: "火車頭", tw: "hoé-chhia-thâu", en: "Station", emoji: " Station 🏠", type: "stations" },
    { zh: "票口", tw: "phiò-khó͘", en: "Ticket Gate", emoji: " Gate 🎟️", type: "stations" },
    { zh: "車廂", tw: "chhia-siang", en: "carriage", emoji: " Carriage 🚃", type: "stations" },
    { zh: "車票", tw: "chhia-phiò", en: "Ticket", emoji: " Ticket 🎫", type: "stations" },
    { zh: "司機", tw: "su-ki", en: "Driver", emoji: " Driver 🧑‍✈️", type: "stations" },
    { zh: "售票機", tw: "siū-phiò-ki", en: "Ticket Machine", emoji: " Machine 🤖", type: "stations" },
    { zh: "鐵路", tw: "thih-lōo", en: "Railway", emoji: " Rail 🛤️", type: "stations" }
];

// ==========================================
// 3. 語音對照字典與同音字 (本地離線備援使用)
// ==========================================
const twHomophones = {
    // 站點
    "基隆": "給龍", "台北": "台八", "桃園": "逃橫", "新竹": "心ㄉㄟ",
    "苗栗": "苗列", "台中": "台中心", "彰化": "江華", "嘉義": "尬意",
    "台南": "台南", "高雄": "勾雄", "屏東": "屏東", "台東": "台東",
    "花蓮": "花連", "宜蘭": "宜蘭",
    // 詞彙
    "火車": "毀車", "捷運": "基溫", "公車": "公車", "飛機": "杯機",
    "鐵馬": "鐵杯", "船": "寸", "計程車": "給聽車", "高鐵": "高鐵",
    "月台": "月台", "火車頭": "毀車頭", "票口": "標口", "車廂": "車相",
    "車票": "車標", "司機": "司機", "售票機": "休標基", "鐵路": "鐵路",
    // 票券/乘車資訊
    "區間車": "區間車", "自強號": "自強號", "一張": "基張", "兩張": "冷張",
    "三張": "三張", "四張": "細張", "五張": "奧張", "六張": "拉張",
    "七張": "七張", "八張": "北張", "九張": "告張", "十張": "雜張",
    "票": "標", "箍": "科", "元": "科", "攏總": "龍總", "一共": "龍總", "去": "去", "出發": "七滑",
    "開": "虧", "開車": "虧車", "候車": "好車",
    // 時間/數字
    "早起": "載起", "早起時": "載起西", "早上": "載起", "下晡": "誒撥", "下午": "誒撥", "暗時": "暗喜", "晚上": "暗喜", 
    "第一": "碟伊", "第二": "碟利", "第三": "碟衫", "第四": "碟細",
    "點半": "點半", "半": "半", "點": "點", "分": "昏", "小時": "點鐘", "分鐘": "昏晶",
    "兩": "兩", "二": "吉", "三": "衫", "四": "細", "五": "喔", "六": "辣",
    "七": "七", "八": "北", "九": "狗", "十": "雜", "百": "百", "千": "千",
    "五十": "奧雜", "一百": "基百", "兩百": "冷百", "三百": "三百", "四百": "四百",
    "五百": "奧百", "六百": "辣百", "七百": "七百", "八百": "北百", "九百": "告百",
    "十分": "雜昏", "十五分": "雜奧昏", "二十分": "吉雜昏", "三分": "三雜昏",
    "四十分": "細雜昏", "四十五分": "細雜奧昏", "五十分": "奧雜昏",
    // 答題反饋
    "著矣": "丟啊", "毋著喔": "嗯丟喔", "答對了": "丟啊", "答錯了": "嗯丟喔",
    // 台鐵小站 (TRA Small Stations) 同音字近似
    "八堵": "北ㄉㄟ", "暖暖": "軟軟", "瑞芳": "誰紅", "雙溪": "霜溪",
    "福隆": "福龍", "萬華": "万花", "板橋": "半橋", "鶯歌": "英科",
    "三峽": "三峽", "中壢": "中力", "楊梅": "央每", "湖口": "虎口",
    "竹北": "竹北", "六家": "辣嘎", "竹南": "竹南", "頭份": "頭份",
    "銅鑼": "同羅", "三義": "三義", "豐原": "風原", "清水": "清水",
    "沙鹿": "沙鹿", "龍井": "龍井", "大慶": "大慶", "烏日": "烏日",
    "員林": "員林", "田中": "田中", "二水": "吉水", "林內": "林內",
    "斗六": "斗六", "斗南": "斗南", "新營": "新營", "柳營": "柳營",
    "沙崙": "沙崙", "永康": "永康", "新市": "新市", "善化": "善化",
    "楠梓": "藍子", "岡山": "港山", "仁武": "因無", "鳳山": "紅山",
    "大湖": "大湖", "林邊": "林邊", "東港": "東港",
    "蘇澳": "蘇澳", "東澳": "東澳", "新城": "新城", "吉安": "吉安",
    "壽豐": "壽豐", "富源": "富源", "玉里": "玉里", "富里": "富里",
    "池上": "池上", "關山": "關山", "鹿野": "鹿野", "知本": "知本", "大武": "大武",
    // 高鐵站 (HSR Stations)
    "南港": "藍港", "板橋": "半橋", "雲林": "雲林", "左營": "左營"
};

// ==========================================
// 4. UI 雙語字典
// ==========================================
const uiStrings = {
    ZH: {
        title: "台灣鐵路四界行", subtitle: "歡喜學台語 / Fun Taiwanese Railway Adventure",
        tabAdventure: "購票大冒險", tabVocab: "交通詞彙牆", tabTime: "時間鐘點師", tabQuiz: "台語大檢定", tabStamps: "我的集章冊",
        boothTitle: "售票亭 Ticket Booth", labelFrom: "起點站 From:", labelTo: "終點站 To:",
        labelClass: "火車種類 Class:", labelPassengers: "張數 Tickets:", labelDepTime: "發車時間 Departure:",
        infoDirection: "行車方向 Direction:", infoDuration: "乘車時間 Duration:",
        infoCost: "總票價 Total Cost:", infoPlatform: "候車月台 Platform:",
        btnPlayJourney: "播放台語購票語音", mapTitle: "環島鐵道路線圖 Map",
        vocabTitle: "交通台語詞彙牆 Vocabulary", clockTitle: "撥撥看時鐘 Clock Trainer",
        timeLearnTitle: "時間台語發音教室", labelAdjustTime: "微調時間 Adjust Time:", labelPresetTime: "常見火車發車時間 Presets:",
        btnPlayClock: "播放台語時間發音", quizTitle: "台語大檢定 Challenge Mode",
        quizWelcomeTitle: "準備接受台語大挑戰了嗎？",
        quizWelcomeDesc: "我們提供兩大交通檢定關卡！點選按鈕後將隨機播放 10 題台語語音，在時限內選出正確答案。答對 8 題以上即可解鎖該城市的精美火車紀念印章喔！",
        quizSellerName: "售票員聽力挑戰", quizTimeName: "發車時刻聽力挑戰",
        btnRetry: "返回檢定選單", stampsTitle: "我的鐵道集章冊 Stamp Album",
        stampsDesc: "在「台語大檢定」中答對 8 題以上即可隨機獲得一個城市的限定紀念章。收集越多，代表你已經搭著火車玩遍了全台灣！",
        clockwise: "順時針方向 ➡️", counterclockwise: "逆時針方向 ⬅️", sameStation: "同站出發 🚉",
        platformNum: "第 {0} 月台", ticketCount: "{0} 張", priceUnit: "{0} 元",
        hours: "{0} 小時", mins: "{0} 分鐘", durationFormat: "{0}小時 {1}分鐘",
        langBtnText: "Language: 台語"
    },
    EN: {
        title: "Taiwan Railway Tour", subtitle: "歡喜學台語 / Fun Taiwanese Railway Adventure",
        tabAdventure: "Ticket Adventure", tabVocab: "Vocab Wall", tabTime: "Time Trainer", tabQuiz: "Quiz Challenge", tabStamps: "Stamp Album",
        boothTitle: "Ticket Booth", labelFrom: "Origin:", labelTo: "Destination:",
        labelClass: "Train Class:", labelPassengers: "Tickets:", labelDepTime: "Departure Time:",
        infoDirection: "Direction:", infoDuration: "Travel Duration:",
        infoCost: "Total Fare:", infoPlatform: "Platform:",
        btnPlayJourney: "Play Voice (Taiwanese)", mapTitle: "Railway Map",
        vocabTitle: "Transport Vocab Wall", clockTitle: "Interactive Clock",
        timeLearnTitle: "Time Pronunciation Class", labelAdjustTime: "Adjust Time:", labelPresetTime: "Train Departure Presets:",
        btnPlayClock: "Play Clock Voice", quizTitle: "Taiwanese Quiz Challenge",
        quizWelcomeTitle: "Ready for the Taiwanese Challenge?",
        quizWelcomeDesc: "Choose a challenge! We have 2 listening quizzes. Listen to 10 Taiwanese audio clips and choose the correct answer under the timer. Score 8+ to unlock a beautiful commemorative train stamp!",
        quizSellerName: "Ticket Seller Quiz", quizTimeName: "Departure Time Quiz",
        btnRetry: "Back to Menu", stampsTitle: "My Stamp Album",
        stampsDesc: "Score 8+ in any quiz challenge to collect a commemorative city station stamp. Collect them all to complete your island journey!",
        clockwise: "Clockwise ➡️", counterclockwise: "Counter-Clockwise ⬅️", sameStation: "Same Station 🚉",
        platformNum: "Platform {0}", ticketCount: "{0} Ticket(s)", priceUnit: "NT$ {0}",
        hours: "{0} hr", mins: "{0} min", durationFormat: "{0}h {1}m",
        langBtnText: "Language: English"
    }
};

// ==========================================
// 5. 狀態變數 (App State)
// ==========================================
let currentLang = "ZH";
let passengers = 1;
let selectedTab = "adventure";
let clockHour = 15;
let clockMinute = 30;
let speechRate = 1.0;

// Quiz State
let quizType = "seller"; // 'seller' or 'time'
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizTimeLeft = 20;
let quizTimerInterval = null;
let currentCorrectAnswer = null;
let quizHasAnswered = false;

// Audio States
let activeAudio = null;
let voiceEngineMode = "google"; // "google" or "local"

// ==========================================
// 6. 初始化 (On Load)
// ==========================================
window.onload = () => {
    // 動態將台鐵小站與高鐵站加入詞彙庫 — 使用 s.poj 顯示為台語羅馬字
    stations.forEach(s => {
        if (s.line === "TRA" && !s.isMain) {
            vocabData.push({
                zh: s.nameZH,
                tw: s.poj,
                en: s.nameEN + " (TRA)",
                emoji: s.stamp + " " + s.id,
                type: "tra-station",
                id: s.id
            });
        } else if (s.line === "HSR") {
            vocabData.push({
                zh: s.nameZH,
                tw: s.poj,
                en: s.nameEN + " (HSR)",
                emoji: s.stamp + " " + s.id,
                type: "hsr-station",
                id: s.id
            });
        }
    });

    if (localStorage.getItem("app_lang")) {
        currentLang = localStorage.getItem("app_lang");
    }
    if (localStorage.getItem("app_theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        const icon = document.querySelector("#theme-toggle-btn i");
        if (icon) icon.className = "fa-solid fa-sun";
    }
    if (localStorage.getItem("app_speech_rate")) {
        speechRate = parseFloat(localStorage.getItem("app_speech_rate"));
        const rateSlider = document.getElementById("speech-rate");
        if (rateSlider) {
            rateSlider.value = speechRate;
            document.getElementById("speech-rate-label").textContent = speechRate.toFixed(1) + "x";
        }
    }

    populateDropdowns();
    renderTaiwanMap();
    renderVocabWall();
    renderStampsAlbum();
    updateClockHands();
    updateClockReadout();
    updateUI();
    calculateJourney();
    setupClockDragging();
    bindDynamicEvents();
};;;;;;

// ==========================================
// 7. 介面渲染與操作
// ==========================================
function populateDropdowns() {
    const startSelect = document.getElementById("start-station");
    const endSelect = document.getElementById("end-station");
    if (!startSelect || !endSelect) return;
    
    startSelect.innerHTML = "";
    endSelect.innerHTML = "";
    
    const mainTRA = stations.filter(s => s.line === "TRA" && s.isMain);
    const smallTRA = stations.filter(s => s.line === "TRA" && !s.isMain);
    const hsr = stations.filter(s => s.line === "HSR");
    
    const groups = [
        { labelZH: "台鐵主要車站", labelEN: "TRA Main Stations", list: mainTRA },
        { labelZH: "台鐵沿線小站", labelEN: "TRA Small Stations", list: smallTRA },
        { labelZH: "高鐵車站", labelEN: "HSR Stations", list: hsr }
    ];
    
    groups.forEach(g => {
        const groupStart = document.createElement("optgroup");
        const groupEnd = document.createElement("optgroup");
        
        groupStart.label = currentLang === "ZH" ? g.labelZH : g.labelEN;
        groupEnd.label = currentLang === "ZH" ? g.labelZH : g.labelEN;
        
        g.list.forEach(station => {
            const opt1 = document.createElement("option");
            const opt2 = document.createElement("option");
            opt1.value = opt2.value = station.id;
            
            const label = station.nameZH + " (" + station.poj + " / &nbsp;" + station.nameEN + ")";
            opt1.innerHTML = opt2.innerHTML = label;
            
            groupStart.appendChild(opt1);
            groupEnd.appendChild(opt2);
        });
        
        startSelect.appendChild(groupStart);
        endSelect.appendChild(groupEnd);
    });
    
    startSelect.value = "taipei";
    endSelect.value = "kaohsiung";
}

// 渲染環島鐵路地圖 SVG
function renderTaiwanMap() {
    const railTrack = document.getElementById("svg-rail-track");
    const railTrackDashed = document.getElementById("svg-rail-track-dashed");
    const stationsGroup = document.getElementById("svg-stations-group");
    if (!railTrack || !stationsGroup) return;
    
    const stationsTRA = stations.filter(s => s.line === "TRA");
    const stationsHSR = stations.filter(s => s.line === "HSR");
    
    // Draw TRA circular loop
    let dPath = "M " + stationsTRA[0].cx + " " + stationsTRA[0].cy;
    for (let i = 1; i < stationsTRA.length; i++) {
        dPath += " L " + stationsTRA[i].cx + " " + stationsTRA[i].cy;
    }
    dPath += " Z";
    
    // Draw HSR linear track
    if (stationsHSR.length > 0) {
        dPath += " M " + stationsHSR[0].cx + " " + stationsHSR[0].cy;
        for (let i = 1; i < stationsHSR.length; i++) {
            dPath += " L " + stationsHSR[i].cx + " " + stationsHSR[i].cy;
        }
    }
    
    railTrack.setAttribute("d", dPath);
    if (railTrackDashed) railTrackDashed.setAttribute("d", dPath);
    
    stationsGroup.innerHTML = "";
    stations.forEach(st => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("class", "station-point " + (st.line === "HSR" ? "hsr-node" : "tra-node"));
        group.setAttribute("id", "svg-node-" + st.id);
        group.onclick = () => {
            playTaigiTTS(st.nameZH, st.audioId || st.poj);
            highlightNode(st.id);
        };
        
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", st.cx);
        circle.setAttribute("cy", st.cy);
        circle.setAttribute("r", st.isMain ? "6" : "4.5");
        if (st.line === "HSR") {
            circle.style.stroke = "#6C5CE7";
        } else {
            circle.style.stroke = "#0984E3";
        }
        
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", st.cx + (st.cx > 150 ? 12 : -12));
        text.setAttribute("y", st.cy + 4);
        text.setAttribute("text-anchor", st.cx > 150 ? "start" : "end");
        
        // Hide small stations labels by default to prevent map cluttering
        if (!st.isMain && st.line !== "HSR") {
            text.style.display = "none";
        }
        
        text.textContent = st.nameZH;
        
        group.appendChild(circle);
        group.appendChild(text);
        stationsGroup.appendChild(group);
    });
}

function highlightNode(stationId) {
    stations.forEach(st => {
        const el = document.getElementById(`svg-node-${st.id}`);
        if (el) el.classList.remove("active");
    });
    const activeEl = document.getElementById(`svg-node-${stationId}`);
    if (activeEl) activeEl.classList.add("active");
}

// 渲染詞彙學堂
function renderVocabWall() {
    const vocabContainer = document.getElementById("vocab-container");
    vocabContainer.innerHTML = "";
    
    vocabData.forEach(item => {
        const card = document.createElement("div");
        card.className = "vocab-card";
        card.setAttribute("data-type", item.type);
        // 依據 type 決定標籤色彩 class
        if (item.type === "tra-station") card.classList.add("card-tra");
        if (item.type === "hsr-station") card.classList.add("card-hsr");
        card.onclick = () => playTaigiTTS(item.zh.replace(/（.*）$|\(.*\)$/, ''), item.tw);
        
        // emoji: station items store "stamp id", vocab items store " emoji"
        const emojiParts = item.emoji.split(' ');
        const displayEmoji = emojiParts[0] || emojiParts[1] || '🚉';
        
        card.innerHTML = `
            <span class="vocab-emoji">${displayEmoji}</span>
            <div class="vocab-zh">${item.zh}</div>
            <div class="vocab-pinyin">${item.tw}</div>
            <div class="vocab-en">${item.en}</div>
        `;
        vocabContainer.appendChild(card);
    });
}

function filterVocab(type) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    
    const btnEl = document.getElementById(`btn-filter-${type}`);
    if (btnEl) btnEl.classList.add("active");
    
    if (type === 'all') {
        document.querySelectorAll(".vocab-card").forEach(card => card.style.display = "block");
    } else {
        document.querySelectorAll(".vocab-card").forEach(card => {
            if (card.getAttribute("data-type") === type) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
}

// 變更張數
function changePassengers(amount) {
    passengers += amount;
    if (passengers < 1) passengers = 1;
    if (passengers > 10) passengers = 10;
    
    document.getElementById("passenger-count").textContent = passengers;
    calculateJourney();
}

// ==========================================
// 8. 購票路程計算邏輯 (順逆時針環島計算)
// ==========================================
function calculateJourney() {
    const startId = document.getElementById("start-station").value;
    const endId = document.getElementById("end-station").value;
    
    // Reset map styles
    stations.forEach(s => {
        const el = document.getElementById("svg-node-" + s.id);
        if (el) el.classList.remove("active", "in-route");
    });
    
    const startNode = document.getElementById("svg-node-" + startId);
    const endNode = document.getElementById("svg-node-" + endId);
    if (startNode) startNode.classList.add("active");
    if (endNode) endNode.classList.add("active");
    
    const t = uiStrings[currentLang];
    
    if (startId === endId) {
        document.getElementById("info-direction").textContent = t.sameStation;
        document.getElementById("info-duration").textContent = "0 mins";
        document.getElementById("info-cost").textContent = "NT$ 0";
        document.getElementById("info-platform").textContent = "-";
        document.getElementById("play-journey-btn").disabled = true;
        document.getElementById("journey-sentence-box").classList.remove("active");
        document.getElementById("train-marker").classList.remove("active");
        document.getElementById("svg-rail-active-path").setAttribute("d", "");
        return;
    }
    
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    
    const routeInfo = getRoute(startId, endId);
    const chosenRoute = routeInfo.path;
    const distance = routeInfo.distance;
    
    // Highlight route nodes
    for (let i = 1; i < chosenRoute.length - 1; i++) {
        const midNode = document.getElementById("svg-node-" + chosenRoute[i].id);
        if (midNode) midNode.classList.add("in-route");
    }
    
    // Draw active route path
    let activeD = "M " + chosenRoute[0].cx + " " + chosenRoute[0].cy;
    for (let i = 1; i < chosenRoute.length; i++) {
        activeD += " L " + chosenRoute[i].cx + " " + chosenRoute[i].cy;
    }
    const activePath = document.getElementById("svg-rail-active-path");
    if (activePath) {
        activePath.setAttribute("d", "");
        setTimeout(() => {
            activePath.setAttribute("d", activeD);
        }, 10);
    }
    
    // Fares and duration
    let cost = 0;
    let durationMinutes = 0;
    const trainClass = document.getElementById("train-class").value;
    
    if (startStation.line === "TRA" && endStation.line === "TRA") {
        const rate = trainClass === "express" ? 3.5 : 2.0;
        cost = Math.round(distance * rate * passengers);
        const speed = trainClass === "express" ? 1.5 : 1.0;
        durationMinutes = Math.round(distance / speed);
    } else if (startStation.line === "HSR" && endStation.line === "HSR") {
        cost = Math.round(distance * 4.5 * passengers);
        durationMinutes = Math.round(distance / 3.0);
    } else {
        // Transfer route
        const parts = routeInfo.direction.split("|");
        const transferTId = parts[1];
        
        let traDist = 0;
        let hsrDist = 0;
        
        if (startStation.line === "TRA") {
            const traT = stations.find(s => s.line === "TRA" && s.transferId === transferTId);
            const hsrT = stations.find(s => s.line === "HSR" && s.transferId === transferTId);
            traDist = getDistanceBetween(startId, traT.id);
            hsrDist = getDistanceBetween(hsrT.id, endId);
        } else {
            const hsrT = stations.find(s => s.line === "HSR" && s.transferId === transferTId);
            const traT = stations.find(s => s.line === "TRA" && s.transferId === transferTId);
            hsrDist = getDistanceBetween(startId, hsrT.id);
            traDist = getDistanceBetween(traT.id, endId);
        }
        
        const traCost = Math.round(traDist * (trainClass === "express" ? 3.5 : 2.0));
        const hsrCost = Math.round(hsrDist * 4.5);
        cost = (traCost + hsrCost) * passengers;
        
        const traSpeed = trainClass === "express" ? 1.5 : 1.0;
        durationMinutes = Math.round(traDist / traSpeed) + Math.round(hsrDist / 3.0) + 15; // 15 mins transfer time
    }
    
    const durationHrs = Math.floor(durationMinutes / 60);
    const durationMins = durationMinutes % 60;
    
    // Display direction
    let dirText = t.clockwise;
    if (routeInfo.direction === "counterclockwise") {
        dirText = t.counterclockwise;
    } else if (routeInfo.direction.startsWith("tra-to-hsr") || routeInfo.direction.startsWith("hsr-to-tra")) {
        const transferTId = routeInfo.direction.split("|")[1];
        const transSt = stations.find(s => s.transferId === transferTId);
        dirText = currentLang === "ZH" ? "跨系統轉乘 (於 " + (transSt ? transSt.nameZH : "") + " 轉車)" : "Transfer via " + (transSt ? transSt.nameEN : "");
    } else if (routeInfo.direction.startsWith("hsr")) {
        dirText = routeInfo.direction === "hsr-southbound" ? (currentLang === "ZH" ? "高鐵南下 ➡️" : "HSR Southbound ➡️") : (currentLang === "ZH" ? "高鐵北上 ⬅️" : "HSR Northbound ⬅️");
    }
    
    document.getElementById("info-direction").textContent = dirText;
    const durationStr = durationHrs > 0 
        ? t.durationFormat.replace("{0}", durationHrs).replace("{1}", durationMins)
        : t.mins.replace("{0}", durationMins);
    document.getElementById("info-duration").textContent = durationStr;
    document.getElementById("info-cost").textContent = t.priceUnit.replace("{0}", cost);
    
    // Platform info
    let platformNum = 1;
    if (startStation.line === "HSR") {
        platformNum = startId === "hsr-taipei" ? "B2" : "A/B";
    } else {
        const traIdx = stations.filter(s => s.line === "TRA").findIndex(s => s.id === startId);
        platformNum = (traIdx % 4) + 1;
    }
    document.getElementById("info-platform").textContent = t.platformNum.replace("{0}", platformNum);
    
    document.getElementById("play-journey-btn").disabled = false;
    animateTrainOnMap(chosenRoute);
}

// 讓火車在 SVG 地圖上循序移動
function animateTrainOnMap(route) {
    const train = document.getElementById("train-marker");
    train.classList.add("active");
    
    let currentStop = 0;
    
    function moveNext() {
        if (currentStop >= route.length) return;
        const targetSt = route[currentStop];
        train.style.left = `${(targetSt.cx / 320) * 100}%`;
        train.style.top = `${(targetSt.cy / 500) * 100}%`;
        
        currentStop++;
        setTimeout(moveNext, 450);
    }
    
    moveNext();
}

// ==========================================
// 9. 語音朗讀合成模組 (Speech Synthesis)
// ==========================================
// Audio States
let activeQueueAudio = null;

const taigiAudioMap = {
    // --- Crawled station audio mappings & Character fallbacks ---

    // --- Crawled station audio mappings & Character fallbacks ---

    // --- Crawled station audio mappings & Character fallbacks ---
    "保安": "20697(1)",

    // --- Crawled station audio mappings & Character fallbacks ---

    // --- Crawled station audio mappings & Character fallbacks ---
    "八堵": "20751(1)",
    "暖暖": "20753(1)",
    "瑞芳": "20755(1)",
    "雙溪": "20759(1)",
    "福隆": "20761(1)",
    "萬華": "20638(1)",
    "板橋": "20639(1)",
    "鶯歌": "20642(1)",
    "中壢": "20645(1)",
    "楊梅": "20647(1)",
    "湖口": "20649(1)",
    "竹北": "20651(1)",
    "六家": "28089(1)",
    "竹南": "20655(1)",
    "銅鑼": "2381(2)",
    "三義": "20661(1)",
    "豐原": "20664(1)",
    "清水": "752(4)",
    "沙鹿": "20720(1)",
    "龍井": "20721(1)",
    "大慶": "20667(1)",
    "烏日": "20668(1)",
    "員林": "20672(1)",
    "田中": "20675(1)",
    "二水": "20676(1)",
    "林內": "20677(1)",
    "斗六": "20679(1)",
    "斗南": "20680(1)",
    "新營": "20688(1)",
    "柳營": "20689(1)",
    "沙崙": "331(4)",
    "永康": "20695(1)",
    "新市": "20694(1)",
    "善化": "20693(1)",
    "楠梓": "20703(1)",
    "岡山": "20701(1)",
    "鳳山": "20727(1)",
    "大湖": "20699(1)",
    "林邊": "20740(1)",
    "蘇澳": "20777(1)",
    "東澳": "20780(1)",
    "新城": "20787(1)",
    "吉安": "20791(1)",
    "壽豐": "20794(1)",
    "富源": "20801(1)",
    "玉里": "20805(1)",
    "富里": "20809(1)",
    "池上": "20810(1)",
    "關山": "20812(1)",
    "鹿野": "20816(1)",
    "知本": "20830(1)",
    "大武": "20825(1)",
    "南港": "21389(1)",
    "左營": "20704(1)",
    "新": "6452(1)",
    "竹": "20650(1)",
    "南": "20695(1)",
    "港": "7205(1)",
    "東": "20817(1)",
    "西": "11879(1)",
    "北": "20636(1)",
    "中": "20665(1)",
    "大": "3543(1)",
    "頭": "24443(1)",
    "份": "2282(1)",
    "林": "20657(1)",
    "內": "2599(1)",
    "雙": "20758(1)",
    "溪": "20757(1)",
    "福": "20760(1)",
    "隆": "20762(1)",
    "暖": "20754(1)",
    "堵": "20750(1)",
    "瑞": "20756(1)",
    "芳": "20759(1)",
    "水": "20678(1)",
    "沙": "20719(1)",
    "鹿": "20722(1)",
    "田": "20674(1)",
    "員": "20671(1)",
    "斗": "20681(1)",
    "仁": "20725(1)",
    "武": "20726(1)",
    "換": "8406(1)",

    // 站名
    "基隆": "20752(1)",
    "台北": "20637(1)",
    "臺北": "20637(1)",
    "桃園": "20643(1)",
    "新竹": "20652(1)",
    "苗栗": "20658(1)",
    "台中": "20666(1)",
    "臺中": "20666(1)",
    "彰化": "20670(1)",
    "嘉義": "20684(1)",
    "台南": "20696(1)",
    "臺南": "20696(1)",
    "高雄": "20705(1)",
    "屏東": "20731(1)",
    "台東": "20818(1)",
    "臺東": "20818(1)",
    "花蓮": "20790(1)",
    "宜蘭": "20770(1)",
    
    // 數字
    "一_quantity": "1(1)", // tsi̍t (一張, 一箍)
    "一_digit": "2(1)",    // it (第一, 十一)
    "二": "44(1)",
    "三": "163(1)",
    "四": "1408(1)",
    "五": "565(1)",
    "六": "578(1)",
    "七": "40(1)",
    "八": "49(1)",
    "九": "41(1)",
    "十": "54(1)",
    "兩": "3584(1)",      // nn̄g
    "百": "2585(1)",      // pah
    "千": "180(1)",       // tshian
    
    // 時間與單位
    "早起": "2517(1)",
    "下晡": "432(1)",
    "暗時": "9598(1)",
    "點": "12451(1)",
    "半": "1387(1)",
    "分": "584(1)",
    "點鐘": "12472(1)",
    "分鐘": "768(1)",
    "箍": "10682(1)",     // 元
    
    // 詞彙
    "火車": "1242(1)",
    "捷運": "7397(1)",
    "公車": "23445(1)",
    "鐵馬": "13148(1)",
    "船": "7784(1)",
    "計程車": "5537(1)",
    "高鐵": "24834(1)",
    "月台": "24426(1)",
    "火車頭": "13946(1)",
    "車廂": "23725(1)",
    "車票": "3459(1)",
    "司機": "1608(1)",
    "鐵路": "24177(1)",
    "飛行機": "5591(1)",
    "口": "183(1)",
    "賣": "11390(1)",
    "票": "7683(1)",
    "自強": "2721(1)",
    "號": "9978(1)",
    "區間": "25732(1)",
    "車": "3394(1)",
    
    // 銜接與文法
    "我": "3139(1)",
    "欲": "7469(1)",
    "去": "1395(1)",
    "買": "9037(1)",
    "張": "7179(1)",
    "開車": "9170(1)",
    "攏總": "12790(1)",
    "佇": "2858(1)",
    "第": "7691(1)",
    "第一": "7693(1)",
    "等": "8817(1)",
    
    // 回饋
    "著": "8981(1)",
    "矣": "3336(1)",
    "毋著": "1089(1)",
    "喔": "8172(1)",
    "對": "10442(1)",
    "同": "2115(1)"
};

// 數字轉實體音檔陣列
function numberToAudioSegments(num, isQuantity = false) {
    let segments = [];
    
    // 千位
    if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        if (thousands === 1) {
            segments.push(taigiAudioMap["一_digit"]);
        } else if (thousands === 2) {
            segments.push(taigiAudioMap["兩"]);
        } else {
            segments.push(taigiAudioMap[numberToKanjiDigit(thousands)]);
        }
        segments.push(taigiAudioMap["千"]);
        num %= 1000;
    }
    
    // 百位
    if (num >= 100) {
        const h = Math.floor(num / 100);
        if (h === 1) {
            segments.push(taigiAudioMap["一_digit"]);
        } else if (h === 2) {
            segments.push(taigiAudioMap["兩"]);
        } else {
            segments.push(taigiAudioMap[numberToKanjiDigit(h)]);
        }
        segments.push(taigiAudioMap["百"]);
        num %= 100;
    }
    
    // 十位與個位
    if (num > 0) {
        if (num < 10) {
            if (num === 2 && isQuantity) {
                segments.push(taigiAudioMap["兩"]);
            } else if (num === 1 && isQuantity) {
                segments.push(taigiAudioMap["一_quantity"]);
            } else {
                segments.push(taigiAudioMap[numberToKanjiDigit(num)]);
            }
        } else if (num === 10) {
            segments.push(taigiAudioMap["十"]);
        } else if (num < 20) {
            segments.push(taigiAudioMap["十"]);
            segments.push(taigiAudioMap[numberToKanjiDigit(num % 10)]);
        } else {
            const tens = Math.floor(num / 10);
            const units = num % 10;
            segments.push(taigiAudioMap[numberToKanjiDigit(tens)]);
            segments.push(taigiAudioMap["十"]);
            if (units > 0) {
                if (units === 1) {
                    segments.push(taigiAudioMap["一_digit"]);
                } else {
                    segments.push(taigiAudioMap[numberToKanjiDigit(units)]);
                }
            }
        }
    }
    
    return segments;
}

function numberToKanjiDigit(digit) {
    const map = {
        1: "一_digit",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "七",
        8: "八",
        9: "九"
    };
    return map[digit] || "";
}

// 時間轉實體音檔陣列
function timeToAudioSegments(timeStr) {
    const parts = timeStr.split(":");
    const hour = parseInt(parts[0]);
    const min = parseInt(parts[1]);
    
    let segments = [];
    
    // 時間段
    let periodKey = "早起";
    let displayHour = hour;
    if (hour >= 12 && hour < 18) {
        periodKey = "下晡";
        displayHour = hour === 12 ? 12 : hour - 12;
    } else if (hour >= 18) {
        periodKey = "暗時";
        displayHour = hour === 12 ? 12 : hour - 12;
    } else if (hour === 0) {
        displayHour = 12;
    }
    
    segments.push(taigiAudioMap[periodKey]);
    
    // 小時
    if (displayHour === 2) {
        segments.push(taigiAudioMap["兩"]);
    } else {
        segments.push(taigiAudioMap[numberToKanjiDigit(displayHour)]);
    }
    segments.push(taigiAudioMap["點"]);
    
    // 分鐘
    if (min === 30) {
        segments.push(taigiAudioMap["半"]);
    } else if (min > 0) {
        segments = segments.concat(numberToAudioSegments(min, false));
        segments.push(taigiAudioMap["分"]);
    }
    
    return segments;
}

// 音訊佇列非同步播放器
let queueCancelToken = 0;
function playAudioQueue(audioIds, fallbackText) {
    queueCancelToken++;
    const token = queueCancelToken;

    if (activeAudio) { activeAudio.pause(); activeAudio = null; }
    if (activeQueueAudio) { activeQueueAudio.pause(); activeQueueAudio = null; }
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); }

    const speed = speechRate;
    const cleanIds = audioIds.filter(id => id);
    
    if (cleanIds.length === 0) {
        playOfflineVoiceFallback(fallbackText);
        return;
    }

    updateBadge("google");
    
    let index = 0;
    
    function playNext() {
        if (token !== queueCancelToken) return;
        if (index >= cleanIds.length) return;
        
        const id = cleanIds[index];
        const cdnUrl = `https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/${id}.mp3`;
        
        const audio = new Audio(cdnUrl);
        activeQueueAudio = audio;
        audio.playbackRate = speed;
        
        audio.onended = () => {
            if (token !== queueCancelToken) return;
            index++;
            playNext();
        };
        
        audio.onerror = (e) => {
            console.warn(`Audio playback error for ID ${id}, fallback to Web Speech...`, e);
            if (token !== queueCancelToken) return;
            playOfflineVoiceFallback(fallbackText);
        };
        
        audio.play().catch(err => {
            console.warn(`Audio play failed for ID ${id}, fallback to Web Speech...`, err);
            if (token !== queueCancelToken) return;
            playOfflineVoiceFallback(fallbackText);
        });
    }
    
    playNext();
}

function playTaigiTTS(phraseText, audioIds) {
    let ids = [];
    if (Array.isArray(audioIds)) {
        ids = audioIds;
    } else if (typeof audioIds === 'string') {
        if (/\d+/.test(audioIds)) {
            ids = [audioIds];
        } else {
            const cleanPhrase = phraseText.replace(/[【】]/g, '');
            // Try whole phrase first
            const mappedId = taigiAudioMap[cleanPhrase];
            if (mappedId) {
                ids = [mappedId];
            } else {
                // Character-by-character fallback
                for (let char of cleanPhrase) {
                    const charId = taigiAudioMap[char];
                    if (charId) {
                        ids.push(charId);
                    }
                }
            }
        }
    }
    
    if (ids.length > 0) {
        playAudioQueue(ids, phraseText);
    } else if (typeof audioIds === 'string' && audioIds.length > 3) {
        // audioIds 是台羅拼音 (POJ/TL) 字串 — 嘗試用 nan-TW 台語語音引擎直接朗讀
        playTaiwaneseVoice(audioIds, phraseText);
    } else {
        playOfflineVoiceFallback(phraseText);
    }
}

// 使用 nan-TW 台語語音引擎朗讀台羅拼音
function playTaiwaneseVoice(pojText, fallbackZhText) {
    if (!('speechSynthesis' in window)) {
        playOfflineVoiceFallback(fallbackZhText);
        return;
    }

    const voices = window.speechSynthesis.getVoices();
    // 嘗試找台語 nan-TW 聲音
    const nanVoice = voices.find(v =>
        v.lang === 'nan-TW' ||
        v.lang === 'nan' ||
        v.lang.startsWith('nan') ||
        v.name.toLowerCase().includes('taiwanese') ||
        v.name.toLowerCase().includes('hokkien') ||
        v.name.toLowerCase().includes('min nan')
    );

    if (nanVoice) {
        updateBadge("google");
        const utterance = new SpeechSynthesisUtterance(pojText);
        utterance.voice = nanVoice;
        utterance.lang = 'nan-TW';
        utterance.rate = speechRate;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else {
        // 沒有 nan-TW 聲音時，用同音字將漢字轉換後以 zh-TW 播放
        playOfflineVoiceFallback(fallbackZhText);
    }
}

function playOfflineVoiceFallback(text) {
    if (!('speechSynthesis' in window)) return;
    
    updateBadge("local");
    
    // 同音字轉換
    let phoneticText = text;
    const sortedKeys = Object.keys(twHomophones).sort((a, b) => b.length - a.length);
    sortedKeys.forEach(key => {
        phoneticText = phoneticText.replace(new RegExp(key, 'g'), twHomophones[key]);
    });
    
    console.log(`Speech synthesis translation: "${text}" -> "${phoneticText}"`);
    
    const utterance = new SpeechSynthesisUtterance(phoneticText);
    utterance.lang = "zh-TW"; // 使用繁體中文引擎
    utterance.rate = speechRate;
    
    const voices = window.speechSynthesis.getVoices();
    const twVoice = voices.find(v => v.lang.includes("zh-TW"));
    if (twVoice) utterance.voice = twVoice;
    
    window.speechSynthesis.speak(utterance);
}

function updateBadge(mode) {
    const badge = document.getElementById("speech-engine-badge");
    if (!badge) return;
    if (mode === "google") {
        badge.innerText = "🔊 實體台語 (教育部)";
        badge.className = "speech-badge badge-google";
    } else {
        badge.innerText = "🔊 本地合成 (擬真備援)";
        badge.className = "speech-badge badge-local";
    }
}

// 數字台語讀音轉換庫
const digitsZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const digitsPOJ = ["lîng", "chi̍t", "jī/nn̄g", "sann", "sì", "gōo", "la̍k", "tshit", "peh", "káu", "tsa̍p"];

// 將數字轉換成台語漢字字串
function numberToTaigiText(num) {
    if (num === 0) return "零";
    if (num <= 10) return num === 2 ? "兩" : digitsZH[num];
    if (num < 20) {
        const units = num % 10;
        return "十" + (units > 0 ? (units === 2 ? "二" : digitsZH[units]) : "");
    }
    const tens = Math.floor(num / 10);
    const units = num % 10;
    let result = (tens === 2 ? "兩" : digitsZH[tens]) + "十";
    if (units > 0) {
        result += (units === 2 ? "二" : digitsZH[units]);
    }
    return result;
}

// 將數字轉換成台羅拼音 (POJ)
function numberToTaigiPOJ(num, isQuantity = false) {
    const pojDigits = ["lîng", "chi̍t", "jī", "sann", "sì", "gōo", "la̍k", "tshit", "peh", "káu", "tsa̍p"];
    if (num === 0) return "lîng";
    if (num <= 10) {
        if (num === 2 && isQuantity) return "nn̄g";
        return pojDigits[num];
    }
    if (num < 20) {
        const units = num % 10;
        return "tsa̍p" + (units > 0 ? "-" + (units === 2 ? "jī" : pojDigits[units]) : "");
    }
    const tens = Math.floor(num / 10);
    const units = num % 10;
    let result = (tens === 2 ? "jī" : pojDigits[tens]) + "-tsa̍p";
    if (units > 0) {
        result += "-" + (units === 2 ? "jī" : pojDigits[units]);
    }
    return result;
}

// 序數第一到第十讀法 (例如月台、車廂)
function ordinalToTaigiText(num) {
    const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    return "第" + digits[num];
}

// 價格台語漢字金額讀法
function costToTaigiText(cost) {
    if (cost === 0) return "零箍";
    if (cost < 100) return numberToTaigiText(cost) + "箍";
    
    let result = "";
    let tempCost = cost;
    
    if (tempCost >= 1000) {
        const thousands = Math.floor(tempCost / 1000);
        result += (thousands === 2 ? "兩" : digitsZH[thousands]) + "千";
        tempCost = tempCost % 1000;
        if (tempCost > 0 && tempCost < 100) {
            result += "零";
        }
    }
    if (tempCost >= 100) {
        const hundreds = Math.floor(tempCost / 100);
        result += (hundreds === 2 ? "兩" : digitsZH[hundreds]) + "百";
        tempCost = tempCost % 100;
        if (tempCost > 0 && tempCost < 10) {
            result += "零";
        }
    }
    if (tempCost > 0) {
        result += numberToTaigiText(tempCost);
    }
    return result + "箍";
}

// 價格台羅拼音 (POJ) 金額讀法
function costToTaigiPOJ(cost) {
    if (cost === 0) return "lîng kho͘";
    
    const pojDigitsList = ["lîng", "chi̍t", "jī", "sann", "sì", "gōo", "la̍k", "tshit", "peh", "káu", "tsa̍p"];
    
    let parts = [];
    let tempCost = cost;
    
    if (tempCost >= 1000) {
        const thousands = Math.floor(tempCost / 1000);
        const prefix = thousands === 2 ? "nn̄g" : pojDigitsList[thousands];
        parts.push(prefix + " tsian");
        tempCost = tempCost % 1000;
        if (tempCost > 0 && tempCost < 100) {
            parts.push("lîng");
        }
    }
    
    if (tempCost >= 100) {
        const hundreds = Math.floor(tempCost / 100);
        const prefix = hundreds === 2 ? "nn̄g" : pojDigitsList[hundreds];
        parts.push(prefix + " pah");
        tempCost = tempCost % 100;
        if (tempCost > 0 && tempCost < 10) {
            parts.push("lîng");
        }
    }
    
    if (tempCost > 0) {
        parts.push(numberToTaigiPOJ(tempCost, false)); // 幾十元用 jī-tsa̍p
    }
    
    return parts.join(" ") + " kho͘";
}

// 播放購票語音句型
function playFullJourneyAudio() {
    const startId = document.getElementById("start-station").value;
    const endId = document.getElementById("end-station").value;
    const trainClass = document.getElementById("train-class").value;
    const depTimeSelect = document.getElementById("departure-time");
    if (!depTimeSelect) return;
    const depTimeText = depTimeSelect.options[depTimeSelect.selectedIndex].text;
    
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    
    const routeInfo = getRoute(startId, endId);
    const distance = routeInfo.distance;
    
    // Compute fare
    let cost = 0;
    if (startStation.line === "TRA" && endStation.line === "TRA") {
        const rate = trainClass === "express" ? 3.5 : 2.0;
        cost = Math.round(distance * rate * passengers);
    } else if (startStation.line === "HSR" && endStation.line === "HSR") {
        cost = Math.round(distance * 4.5 * passengers);
    } else {
        // mixed
        const parts = routeInfo.direction.split("|");
        const transferTId = parts[1];
        let traDist = 0;
        let hsrDist = 0;
        if (startStation.line === "TRA") {
            const traT = stations.find(s => s.line === "TRA" && s.transferId === transferTId);
            const hsrT = stations.find(s => s.line === "HSR" && s.transferId === transferTId);
            traDist = getDistanceBetween(startId, traT.id);
            hsrDist = getDistanceBetween(hsrT.id, endId);
        } else {
            const hsrT = stations.find(s => s.line === "HSR" && s.transferId === transferTId);
            const traT = stations.find(s => s.line === "TRA" && s.transferId === transferTId);
            hsrDist = getDistanceBetween(startId, hsrT.id);
            traDist = getDistanceBetween(traT.id, endId);
        }
        const traCost = Math.round(traDist * (trainClass === "express" ? 3.5 : 2.0));
        const hsrCost = Math.round(hsrDist * 4.5);
        cost = (traCost + hsrCost) * passengers;
    }
    
    const passengerZH = numberToTaigiText(passengers) + "張";
    const costZH = costToTaigiText(cost);
    
    const rawTimeZH = depTimeText.split(" ")[0];
    let periodZH = "早起";
    if (rawTimeZH === "下午") periodZH = "下晡";
    else if (rawTimeZH === "晚上") periodZH = "暗時";
    
    const hourMin = depTimeSelect.value.split(":");
    const h = parseInt(hourMin[0]);
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    const hourZH = (displayH === 2 ? "兩" : numberToTaigiText(displayH)) + "點";
    const minZH = hourMin[1] === "30" ? "半" : (hourMin[1] === "00" ? "" : numberToTaigiText(parseInt(hourMin[1])) + "分");
    
    let platformNum = 1;
    if (startStation.line === "HSR") {
        platformNum = startId === "hsr-taipei" ? "2" : "1";
    } else {
        const traIdx = stations.filter(s => s.line === "TRA").findIndex(s => s.id === startId);
        platformNum = (traIdx % 4) + 1;
    }
    
    const endName = endStation.nameZH;
    let taigiSpeechText = "";
    let audioSegments = [];
    
    // Build audio queue
    audioSegments.push(taigiAudioMap["我"]);
    audioSegments.push(taigiAudioMap["欲"]);
    audioSegments.push(taigiAudioMap["去"]);
    
    // Add destination
    const destAudio = taigiAudioMap[endName];
    if (destAudio) audioSegments.push(destAudio);
    else {
        // Fallback for destination name character by character
        for (let char of endName) {
            const charId = taigiAudioMap[char];
            if (charId) audioSegments.push(charId);
        }
    }
    
    if (startStation.line !== endStation.line) {
        // Transfer route!
        const parts = routeInfo.direction.split("|");
        const transferTId = parts[1];
        const transSt = stations.find(s => s.transferId === transferTId);
        const transferZH = transSt ? transSt.nameZH : "";
        
        taigiSpeechText = "我欲去" + endName + "，佇" + transferZH + "換車，買" + passengerZH + "票，攏總" + costZH + "。佇" + ordinalToTaigiText(platformNum) + "月台等車。";
        
        audioSegments.push(taigiAudioMap["佇"]);
        const transAudio = taigiAudioMap[transferZH];
        if (transAudio) audioSegments.push(transAudio);
        else {
            for (let char of transferZH) {
                const charId = taigiAudioMap[char];
                if (charId) audioSegments.push(charId);
            }
        }
        audioSegments.push(taigiAudioMap["換"]);
        audioSegments.push(taigiAudioMap["車"]);
    } else {
        const trainClassZH = startStation.line === "HSR" ? "高鐵" : (trainClass === "express" ? "自強號" : "區間車");
        taigiSpeechText = "我欲去" + endName + "，買" + passengerZH + trainClassZH + "票，" + periodZH + hourZH + minZH + "開車，攏總" + costZH + "。佇" + ordinalToTaigiText(platformNum) + "月台等車。";
        
        audioSegments.push(taigiAudioMap["買"]);
        audioSegments = audioSegments.concat(numberToAudioSegments(passengers, true));
        audioSegments.push(taigiAudioMap["張"]);
        
        if (startStation.line === "HSR") {
            audioSegments.push(taigiAudioMap["高鐵"]);
        } else if (trainClass === "express") {
            audioSegments.push(taigiAudioMap["自強"]);
            audioSegments.push(taigiAudioMap["號"]);
        } else {
            audioSegments.push(taigiAudioMap["區間"]);
            audioSegments.push(taigiAudioMap["車"]);
        }
        audioSegments.push(taigiAudioMap["票"]);
        
        audioSegments.push(taigiAudioMap[periodZH]);
        if (displayH === 2) audioSegments.push(taigiAudioMap["兩"]);
        else audioSegments.push(taigiAudioMap[numberToKanjiDigit(displayH)]);
        audioSegments.push(taigiAudioMap["點"]);
        
        if (hourMin[1] === "30") audioSegments.push(taigiAudioMap["半"]);
        else if (hourMin[1] !== "00") {
            audioSegments = audioSegments.concat(numberToAudioSegments(parseInt(hourMin[1]), false));
            audioSegments.push(taigiAudioMap["分"]);
        }
        audioSegments.push(taigiAudioMap["開車"]);
    }
    
    audioSegments.push(taigiAudioMap["攏總"]);
    audioSegments = audioSegments.concat(numberToAudioSegments(cost, false));
    audioSegments.push(taigiAudioMap["箍"]);
    
    audioSegments.push(taigiAudioMap["佇"]);
    audioSegments.push(taigiAudioMap["第"]);
    audioSegments.push(taigiAudioMap[numberToKanjiDigit(parseInt(platformNum) || 1)]);
    audioSegments.push(taigiAudioMap["月台"]);
    audioSegments.push(taigiAudioMap["等"]);
    audioSegments.push(taigiAudioMap["車"]);
    
    let pinyinBreakdown = "";
    if (startStation.line !== endStation.line) {
        const transSt = stations.find(s => s.transferId === routeInfo.direction.split("|")[1]);
        pinyinBreakdown = "guá beh khì " + endStation.poj + ", tī " + (transSt ? transSt.poj : "") + " uānn tshia, bé " + getPassengerPOJ(passengers) + " phiò, lóng-tsóng " + costToTaigiPOJ(cost) + ". tī tē-" + numberToTaigiPOJ(platformNum) + " gue̍h-tâi tán tshia.";
    } else {
        pinyinBreakdown = "guá beh khì " + endStation.poj + ", bé " + getPassengerPOJ(passengers) + " " + (startStation.line === "HSR" ? "ko-thih" : (trainClass === "express" ? "tsū-kiông-hō" : "khu-kan-tshia")) + " phiò, " + periodZH + " " + numberToTaigiPOJ(displayH) + " tiám " + (hourMin[1] === "30" ? "puàn" : (hourMin[1] === "00" ? "" : numberToTaigiPOJ(parseInt(hourMin[1])) + " hun")) + " khui-tshia, lóng-tsóng " + costToTaigiPOJ(cost) + ". tī tē-" + numberToTaigiPOJ(platformNum) + " gue̍h-tâi tán tshia.";
    }
        
    const sentenceBox = document.getElementById("journey-sentence-box");
    document.getElementById("journey-sentence-zh").textContent = taigiSpeechText;
    document.getElementById("journey-sentence-tw").textContent = taigiSpeechText + " \n(" + pinyinBreakdown + ")";
    sentenceBox.classList.add("active");
    
    playTaigiTTS(taigiSpeechText, audioSegments);
}











function getRoute(startId, endId) {
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    if (!startStation || !endStation) return { path: [], distance: 0, direction: "direct" };
    
    if (startStation.line === endStation.line) {
        if (startStation.line === "TRA") {
            // TRA circular loop routing
            const stationsTRA = stations.filter(s => s.line === "TRA");
            const n = stationsTRA.length;
            const startIndex = stationsTRA.findIndex(s => s.id === startId);
            const endIndex = stationsTRA.findIndex(s => s.id === endId);
            
            // 1. Clockwise
            let cwPath = [];
            let cwDist = 0;
            let curr = startIndex;
            while (curr !== endIndex) {
                let next = (curr + 1) % n;
                cwDist += (stationsTRA[next].dist - stationsTRA[curr].dist + 870) % 870;
                cwPath.push(stationsTRA[curr]);
                curr = next;
            }
            cwPath.push(stationsTRA[endIndex]);
            
            // 2. Counter-Clockwise
            let ccwPath = [];
            let ccwDist = 0;
            curr = startIndex;
            while (curr !== endIndex) {
                let prev = (curr - 1 + n) % n;
                ccwDist += (stationsTRA[curr].dist - stationsTRA[prev].dist + 870) % 870;
                ccwPath.push(stationsTRA[curr]);
                curr = prev;
            }
            ccwPath.push(stationsTRA[endIndex]);
            
            if (cwDist <= ccwDist) {
                return { path: cwPath, distance: cwDist, direction: "clockwise" };
            } else {
                return { path: ccwPath, distance: ccwDist, direction: "counterclockwise" };
            }
        } else {
            // HSR linear routing
            const stationsHSR = stations.filter(s => s.line === "HSR");
            const startIndex = stationsHSR.findIndex(s => s.id === startId);
            const endIndex = stationsHSR.findIndex(s => s.id === endId);
            
            let path = [];
            let distance = 0;
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[endIndex].dist - stationsHSR[startIndex].dist);
                return { path, distance, direction: "hsr-southbound" };
            } else {
                for (let i = startIndex; i >= endIndex; i--) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[startIndex].dist - stationsHSR[endIndex].dist);
                return { path, distance, direction: "hsr-northbound" };
            }
        }
    } else {
        // Mixed routing (Transfer!)
        const stationsTRA = stations.filter(s => s.line === "TRA");
        const stationsHSR = stations.filter(s => s.line === "HSR");
        const transfers = ["taipei", "banqiao", "nangang", "hsinchu", "taichung", "tainan", "zuoying"];
        
        let bestTransfer = null;
        let minTotalDist = Infinity;
        let bestTRAInfo = null;
        let bestHSRInfo = null;
        
        transfers.forEach(tId => {
            const traT = stationsTRA.find(s => s.transferId === tId);
            const hsrT = stationsHSR.find(s => s.line === "HSR" && s.transferId === tId);
            if (traT && hsrT) {
                let traInfo, hsrInfo;
                if (startStation.line === "TRA") {
                    traInfo = getRoute(startId, traT.id);
                    hsrInfo = getRoute(hsrT.id, endId);
                } else {
                    hsrInfo = getRoute(startId, hsrT.id);
                    traInfo = getRoute(traT.id, endId);
                }
                
                const totalDist = traInfo.distance + hsrInfo.distance;
                if (totalDist < minTotalDist) {
                    minTotalDist = totalDist;
                    bestTransfer = tId;
                    bestTRAInfo = traInfo;
                    bestHSRInfo = hsrInfo;
                }
            }
        });
        
        if (bestTransfer) {
            let path, direction;
            if (startStation.line === "TRA") {
                path = bestTRAInfo.path.concat(bestHSRInfo.path);
                direction = "tra-to-hsr|" + bestTransfer;
            } else {
                path = bestHSRInfo.path.concat(bestTRAInfo.path);
                direction = "hsr-to-tra|" + bestTransfer;
            }
            return { path, distance: minTotalDist, direction };
        }
        return { path: [startStation, endStation], distance: 100, direction: "direct" };
    }
}

function getRoute(startId, endId) {
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    if (!startStation || !endStation) return { path: [], distance: 0, direction: "direct" };
    
    if (startStation.line === endStation.line) {
        if (startStation.line === "TRA") {
            // TRA circular loop routing
            const stationsTRA = stations.filter(s => s.line === "TRA");
            const n = stationsTRA.length;
            const startIndex = stationsTRA.findIndex(s => s.id === startId);
            const endIndex = stationsTRA.findIndex(s => s.id === endId);
            
            // 1. Clockwise
            let cwPath = [];
            let cwDist = 0;
            let curr = startIndex;
            while (curr !== endIndex) {
                let next = (curr + 1) % n;
                cwDist += (stationsTRA[next].dist - stationsTRA[curr].dist + 870) % 870;
                cwPath.push(stationsTRA[curr]);
                curr = next;
            }
            cwPath.push(stationsTRA[endIndex]);
            
            // 2. Counter-Clockwise
            let ccwPath = [];
            let ccwDist = 0;
            curr = startIndex;
            while (curr !== endIndex) {
                let prev = (curr - 1 + n) % n;
                ccwDist += (stationsTRA[curr].dist - stationsTRA[prev].dist + 870) % 870;
                ccwPath.push(stationsTRA[curr]);
                curr = prev;
            }
            ccwPath.push(stationsTRA[endIndex]);
            
            if (cwDist <= ccwDist) {
                return { path: cwPath, distance: cwDist, direction: "clockwise" };
            } else {
                return { path: ccwPath, distance: ccwDist, direction: "counterclockwise" };
            }
        } else {
            // HSR linear routing
            const stationsHSR = stations.filter(s => s.line === "HSR");
            const startIndex = stationsHSR.findIndex(s => s.id === startId);
            const endIndex = stationsHSR.findIndex(s => s.id === endId);
            
            let path = [];
            let distance = 0;
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[endIndex].dist - stationsHSR[startIndex].dist);
                return { path, distance, direction: "hsr-southbound" };
            } else {
                for (let i = startIndex; i >= endIndex; i--) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[startIndex].dist - stationsHSR[endIndex].dist);
                return { path, distance, direction: "hsr-northbound" };
            }
        }
    } else {
        // Mixed routing (Transfer!)
        const stationsTRA = stations.filter(s => s.line === "TRA");
        const stationsHSR = stations.filter(s => s.line === "HSR");
        const transfers = ["taipei", "banqiao", "nangang", "hsinchu", "taichung", "tainan", "zuoying"];
        
        let bestTransfer = null;
        let minTotalDist = Infinity;
        let bestTRAInfo = null;
        let bestHSRInfo = null;
        
        transfers.forEach(tId => {
            const traT = stationsTRA.find(s => s.transferId === tId);
            const hsrT = stationsHSR.find(s => s.line === "HSR" && s.transferId === tId);
            if (traT && hsrT) {
                let traInfo, hsrInfo;
                if (startStation.line === "TRA") {
                    traInfo = getRoute(startId, traT.id);
                    hsrInfo = getRoute(hsrT.id, endId);
                } else {
                    hsrInfo = getRoute(startId, hsrT.id);
                    traInfo = getRoute(traT.id, endId);
                }
                
                const totalDist = traInfo.distance + hsrInfo.distance;
                if (totalDist < minTotalDist) {
                    minTotalDist = totalDist;
                    bestTransfer = tId;
                    bestTRAInfo = traInfo;
                    bestHSRInfo = hsrInfo;
                }
            }
        });
        
        if (bestTransfer) {
            let path, direction;
            if (startStation.line === "TRA") {
                path = bestTRAInfo.path.concat(bestHSRInfo.path);
                direction = "tra-to-hsr|" + bestTransfer;
            } else {
                path = bestHSRInfo.path.concat(bestTRAInfo.path);
                direction = "hsr-to-tra|" + bestTransfer;
            }
            return { path, distance: minTotalDist, direction };
        }
        return { path: [startStation, endStation], distance: 100, direction: "direct" };
    }
}

function getRoute(startId, endId) {
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    if (!startStation || !endStation) return { path: [], distance: 0, direction: "direct" };
    
    if (startStation.line === endStation.line) {
        if (startStation.line === "TRA") {
            // TRA circular loop routing
            const stationsTRA = stations.filter(s => s.line === "TRA");
            const n = stationsTRA.length;
            const startIndex = stationsTRA.findIndex(s => s.id === startId);
            const endIndex = stationsTRA.findIndex(s => s.id === endId);
            
            // 1. Clockwise
            let cwPath = [];
            let cwDist = 0;
            let curr = startIndex;
            while (curr !== endIndex) {
                let next = (curr + 1) % n;
                cwDist += (stationsTRA[next].dist - stationsTRA[curr].dist + 870) % 870;
                cwPath.push(stationsTRA[curr]);
                curr = next;
            }
            cwPath.push(stationsTRA[endIndex]);
            
            // 2. Counter-Clockwise
            let ccwPath = [];
            let ccwDist = 0;
            curr = startIndex;
            while (curr !== endIndex) {
                let prev = (curr - 1 + n) % n;
                ccwDist += (stationsTRA[curr].dist - stationsTRA[prev].dist + 870) % 870;
                ccwPath.push(stationsTRA[curr]);
                curr = prev;
            }
            ccwPath.push(stationsTRA[endIndex]);
            
            if (cwDist <= ccwDist) {
                return { path: cwPath, distance: cwDist, direction: "clockwise" };
            } else {
                return { path: ccwPath, distance: ccwDist, direction: "counterclockwise" };
            }
        } else {
            // HSR linear routing
            const stationsHSR = stations.filter(s => s.line === "HSR");
            const startIndex = stationsHSR.findIndex(s => s.id === startId);
            const endIndex = stationsHSR.findIndex(s => s.id === endId);
            
            let path = [];
            let distance = 0;
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[endIndex].dist - stationsHSR[startIndex].dist);
                return { path, distance, direction: "hsr-southbound" };
            } else {
                for (let i = startIndex; i >= endIndex; i--) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[startIndex].dist - stationsHSR[endIndex].dist);
                return { path, distance, direction: "hsr-northbound" };
            }
        }
    } else {
        // Mixed routing (Transfer!)
        const stationsTRA = stations.filter(s => s.line === "TRA");
        const stationsHSR = stations.filter(s => s.line === "HSR");
        const transfers = ["taipei", "banqiao", "nangang", "hsinchu", "taichung", "tainan", "zuoying"];
        
        let bestTransfer = null;
        let minTotalDist = Infinity;
        let bestTRAInfo = null;
        let bestHSRInfo = null;
        
        transfers.forEach(tId => {
            const traT = stationsTRA.find(s => s.transferId === tId);
            const hsrT = stationsHSR.find(s => s.line === "HSR" && s.transferId === tId);
            if (traT && hsrT) {
                let traInfo, hsrInfo;
                if (startStation.line === "TRA") {
                    traInfo = getRoute(startId, traT.id);
                    hsrInfo = getRoute(hsrT.id, endId);
                } else {
                    hsrInfo = getRoute(startId, hsrT.id);
                    traInfo = getRoute(traT.id, endId);
                }
                
                const totalDist = traInfo.distance + hsrInfo.distance;
                if (totalDist < minTotalDist) {
                    minTotalDist = totalDist;
                    bestTransfer = tId;
                    bestTRAInfo = traInfo;
                    bestHSRInfo = hsrInfo;
                }
            }
        });
        
        if (bestTransfer) {
            let path, direction;
            if (startStation.line === "TRA") {
                path = bestTRAInfo.path.concat(bestHSRInfo.path);
                direction = "tra-to-hsr|" + bestTransfer;
            } else {
                path = bestHSRInfo.path.concat(bestTRAInfo.path);
                direction = "hsr-to-tra|" + bestTransfer;
            }
            return { path, distance: minTotalDist, direction };
        }
        return { path: [startStation, endStation], distance: 100, direction: "direct" };
    }
}

function getRoute(startId, endId) {
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    if (!startStation || !endStation) return { path: [], distance: 0, direction: "direct" };
    
    if (startStation.line === endStation.line) {
        if (startStation.line === "TRA") {
            // TRA circular loop routing
            const stationsTRA = stations.filter(s => s.line === "TRA");
            const n = stationsTRA.length;
            const startIndex = stationsTRA.findIndex(s => s.id === startId);
            const endIndex = stationsTRA.findIndex(s => s.id === endId);
            
            // 1. Clockwise
            let cwPath = [];
            let cwDist = 0;
            let curr = startIndex;
            while (curr !== endIndex) {
                let next = (curr + 1) % n;
                cwDist += (stationsTRA[next].dist - stationsTRA[curr].dist + 870) % 870;
                cwPath.push(stationsTRA[curr]);
                curr = next;
            }
            cwPath.push(stationsTRA[endIndex]);
            
            // 2. Counter-Clockwise
            let ccwPath = [];
            let ccwDist = 0;
            curr = startIndex;
            while (curr !== endIndex) {
                let prev = (curr - 1 + n) % n;
                ccwDist += (stationsTRA[curr].dist - stationsTRA[prev].dist + 870) % 870;
                ccwPath.push(stationsTRA[curr]);
                curr = prev;
            }
            ccwPath.push(stationsTRA[endIndex]);
            
            if (cwDist <= ccwDist) {
                return { path: cwPath, distance: cwDist, direction: "clockwise" };
            } else {
                return { path: ccwPath, distance: cwDist, direction: "counterclockwise" };
            }
        } else {
            // HSR linear routing
            const stationsHSR = stations.filter(s => s.line === "HSR");
            const startIndex = stationsHSR.findIndex(s => s.id === startId);
            const endIndex = stationsHSR.findIndex(s => s.id === endId);
            
            let path = [];
            let distance = 0;
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[endIndex].dist - stationsHSR[startIndex].dist);
                return { path, distance, direction: "hsr-southbound" };
            } else {
                for (let i = startIndex; i >= endIndex; i--) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[startIndex].dist - stationsHSR[endIndex].dist);
                return { path, distance, direction: "hsr-northbound" };
            }
        }
    } else {
        // Mixed routing (Transfer!)
        const stationsTRA = stations.filter(s => s.line === "TRA");
        const stationsHSR = stations.filter(s => s.line === "HSR");
        const transfers = ["taipei", "banqiao", "nangang", "hsinchu", "taichung", "tainan", "zuoying"];
        
        let bestTransfer = null;
        let minTotalDist = Infinity;
        let bestTRAInfo = null;
        let bestHSRInfo = null;
        
        transfers.forEach(tId => {
            const traT = stationsTRA.find(s => s.transferId === tId);
            const hsrT = stationsHSR.find(s => s.line === "HSR" && s.transferId === tId);
            if (traT && hsrT) {
                let traInfo, hsrInfo;
                if (startStation.line === "TRA") {
                    traInfo = getRoute(startId, traT.id);
                    hsrInfo = getRoute(hsrT.id, endId);
                } else {
                    hsrInfo = getRoute(startId, hsrT.id);
                    traInfo = getRoute(traT.id, endId);
                }
                
                const totalDist = traInfo.distance + hsrInfo.distance;
                if (totalDist < minTotalDist) {
                    minTotalDist = totalDist;
                    bestTransfer = tId;
                    bestTRAInfo = traInfo;
                    bestHSRInfo = hsrInfo;
                }
            }
        });
        
        if (bestTransfer) {
            let path, direction;
            if (startStation.line === "TRA") {
                path = bestTRAInfo.path.concat(bestHSRInfo.path);
                direction = "tra-to-hsr|" + bestTransfer;
            } else {
                path = bestHSRInfo.path.concat(bestTRAInfo.path);
                direction = "hsr-to-tra|" + bestTransfer;
            }
            return { path, distance: minTotalDist, direction };
        }
        return { path: [startStation, endStation], distance: 100, direction: "direct" };
    }
}

function getRoute(startId, endId) {
    const startStation = stations.find(s => s.id === startId);
    const endStation = stations.find(s => s.id === endId);
    if (!startStation || !endStation) return { path: [], distance: 0, direction: "direct" };
    
    if (startStation.line === endStation.line) {
        if (startStation.line === "TRA") {
            // TRA circular loop routing
            const stationsTRA = stations.filter(s => s.line === "TRA");
            const n = stationsTRA.length;
            const startIndex = stationsTRA.findIndex(s => s.id === startId);
            const endIndex = stationsTRA.findIndex(s => s.id === endId);
            
            // 1. Clockwise
            let cwPath = [];
            let cwDist = 0;
            let curr = startIndex;
            while (curr !== endIndex) {
                let next = (curr + 1) % n;
                cwDist += (stationsTRA[next].dist - stationsTRA[curr].dist + 870) % 870;
                cwPath.push(stationsTRA[curr]);
                curr = next;
            }
            cwPath.push(stationsTRA[endIndex]);
            
            // 2. Counter-Clockwise
            let ccwPath = [];
            let ccwDist = 0;
            curr = startIndex;
            while (curr !== endIndex) {
                let prev = (curr - 1 + n) % n;
                ccwDist += (stationsTRA[curr].dist - stationsTRA[prev].dist + 870) % 870;
                ccwPath.push(stationsTRA[curr]);
                curr = prev;
            }
            ccwPath.push(stationsTRA[endIndex]);
            
            if (cwDist <= ccwDist) {
                return { path: cwPath, distance: cwDist, direction: "clockwise" };
            } else {
                return { path: ccwPath, distance: ccwDist, direction: "counterclockwise" };
            }
        } else {
            // HSR linear routing
            const stationsHSR = stations.filter(s => s.line === "HSR");
            const startIndex = stationsHSR.findIndex(s => s.id === startId);
            const endIndex = stationsHSR.findIndex(s => s.id === endId);
            
            let path = [];
            let distance = 0;
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[endIndex].dist - stationsHSR[startIndex].dist);
                return { path, distance, direction: "hsr-southbound" };
            } else {
                for (let i = startIndex; i >= endIndex; i--) {
                    path.push(stationsHSR[i]);
                }
                distance = Math.abs(stationsHSR[startIndex].dist - stationsHSR[endIndex].dist);
                return { path, distance, direction: "hsr-northbound" };
            }
        }
    } else {
        // Mixed routing (Transfer!)
        const stationsTRA = stations.filter(s => s.line === "TRA");
        const stationsHSR = stations.filter(s => s.line === "HSR");
        const transfers = ["taipei", "banqiao", "nangang", "hsinchu", "taichung", "tainan", "zuoying"];
        
        let bestTransfer = null;
        let minTotalDist = Infinity;
        let bestTRAInfo = null;
        let bestHSRInfo = null;
        
        transfers.forEach(tId => {
            const traT = stationsTRA.find(s => s.transferId === tId);
            const hsrT = stationsHSR.find(s => s.line === "HSR" && s.transferId === tId);
            if (traT && hsrT) {
                let traInfo, hsrInfo;
                if (startStation.line === "TRA") {
                    traInfo = getRoute(startId, traT.id);
                    hsrInfo = getRoute(hsrT.id, endId);
                } else {
                    hsrInfo = getRoute(startId, hsrT.id);
                    traInfo = getRoute(traT.id, endId);
                }
                
                const totalDist = traInfo.distance + hsrInfo.distance;
                if (totalDist < minTotalDist) {
                    minTotalDist = totalDist;
                    bestTransfer = tId;
                    bestTRAInfo = traInfo;
                    bestHSRInfo = hsrInfo;
                }
            }
        });
        
        if (bestTransfer) {
            let path, direction;
            if (startStation.line === "TRA") {
                path = bestTRAInfo.path.concat(bestHSRInfo.path);
                direction = "tra-to-hsr|" + bestTransfer;
            } else {
                path = bestHSRInfo.path.concat(bestTRAInfo.path);
                direction = "hsr-to-tra|" + bestTransfer;
            }
            return { path, distance: minTotalDist, direction };
        }
        return { path: [startStation, endStation], distance: 100, direction: "direct" };
    }
}

function getDistanceBetween(startId, endId) {
    return getRoute(startId, endId).distance;
}

function getPassengerPOJ(num) {
    const map = {
        1: "chi̍t tiunn", 2: "nn̄g tiunn", 3: "sann tiunn", 4: "sì tiunn", 5: "gōo tiunn",
        6: "la̍k tiunn", 7: "tshit tiunn", 8: "peh tiunn", 9: "káu tiunn", 10: "tsa̍p tiunn"
    };
    return map[num] || "";
}

function getTimePOJ(timeStr) {
    const parts = timeStr.split(":");
    const h = parseInt(parts[0]);
    const m = parts[1];
    let period = h < 12 ? "tsá-khí" : (h < 18 ? "ē-po͘" : "am-sî");
    let hourPoj = (h > 12 ? h - 12 : (h === 0 ? 12 : h)) === 2 ? "nn̄g tiám" : numberToTaigiPOJ(h > 12 ? h - 12 : (h === 0 ? 12 : h)) + " tiám";
    let minPoj = m === "30" ? " puàn" : (m === "00" ? "" : " " + numberToTaigiPOJ(parseInt(m)) + " hun");
    return `${period} ${hourPoj}${minPoj}`;
}

// ==========================================
// 10. 互動式時鐘與時間調整
// ==========================================
function setupClockDragging() {
    const clock = document.getElementById("interactive-clock");
    let isDragging = false;
    
    function handlePointer(e) {
        if (!isDragging && e.type === "pointermove") return;
        
        const rect = clock.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        let angleRad = Math.atan2(dy, dx);
        let angleDeg = angleRad * (180 / Math.PI) + 90;
        if (angleDeg < 0) angleDeg += 360;
        
        let mins = Math.round(angleDeg / 6) % 60;
        mins = Math.round(mins / 5) * 5 % 60;
        
        clockMinute = mins;
        
        updateClockHands();
        updateClockReadout();
    }
    
    clock.addEventListener("pointerdown", (e) => {
        isDragging = true;
        clock.setPointerCapture(e.pointerId);
        handlePointer(e);
    });
    
    clock.addEventListener("pointermove", handlePointer);
    
    const stopDrag = (e) => {
        isDragging = false;
    };
    
    clock.addEventListener("pointerup", stopDrag);
    clock.addEventListener("pointercancel", stopDrag);
}

function updateClockHands() {
    const hourHand = document.getElementById("clock-hour-hand");
    const minHand = document.getElementById("clock-min-hand");
    
    const minAngle = clockMinute * 6;
    const hourAngle = ((clockHour % 12) * 30) + (clockMinute * 0.5);
    
    hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minAngle}deg)`;
}

// 更新時鐘數位跟台語文字顯示
function updateClockReadout() {
    const formattedTime = `${clockHour.toString().padStart(2, '0')}:${clockMinute.toString().padStart(2, '0')}`;
    document.getElementById("clock-time-digital").textContent = formattedTime;
    
    // 台語口語時間轉換 (早起、下晡、暗時)
    const period = clockHour < 12 ? "早起" : (clockHour < 18 ? "下晡" : "暗時");
    const periodEN = clockHour < 12 ? "tsán-khí" : (clockHour < 18 ? "ē-po͘" : "am-sî");
    
    const displayHour = clockHour > 12 ? clockHour - 12 : (clockHour === 0 ? 12 : clockHour);
    const hourText = displayHour === 2 ? "兩點" : numberToTaigiText(displayHour) + "點";
    const hourPOJ = (displayHour === 2 ? "nn̄g" : digitsPOJ[displayHour]) + " tiám";
    
    let minText = "";
    let minPOJ = "";
    if (clockMinute === 30) {
        minText = "半";
        minPOJ = " puàn";
    } else if (clockMinute > 0) {
        minText = numberToTaigiText(clockMinute) + "分";
        minPOJ = " " + getMinutePOJ(clockMinute) + " hun";
    }
    
    const twReadout = `${period}${hourText}${minText}`;
    const twPinyin = `${periodEN} ${hourPOJ}${minPOJ}`;
    
    document.getElementById("clock-time-tw").innerHTML = `${twReadout}<br><small>${twPinyin}</small>`;
}

function getMinutePOJ(min) {
    if (min === 15) return "tsa̍p-gōo";
    if (min === 45) return "sì-tsa̍p-gōo";
    return min.toString();
}

function adjustClockTime(amount) {
    let totalMins = clockHour * 60 + clockMinute + amount;
    if (totalMins < 0) totalMins += 24 * 60;
    totalMins = totalMins % (24 * 60);
    
    clockHour = Math.floor(totalMins / 60);
    clockMinute = totalMins % 60;
    
    updateClockHands();
    updateClockReadout();
}

function setClockTime(h, m) {
    clockHour = h;
    clockMinute = m;
    updateClockHands();
    updateClockReadout();
    
    const clock = document.getElementById("interactive-clock");
    clock.classList.add("bounce-effect");
    setTimeout(() => clock.classList.remove("bounce-effect"), 600);
}

function playClockAudio() {
    const timeStr = `${clockHour.toString().padStart(2, '0')}:${clockMinute.toString().padStart(2, '0')}`;
    const timeSegments = timeToAudioSegments(timeStr);
    
    const period = clockHour < 12 ? "早起" : (clockHour < 18 ? "下晡" : "暗時");
    const displayHour = clockHour > 12 ? clockHour - 12 : (clockHour === 0 ? 12 : clockHour);
    
    const hourText = displayHour === 2 ? "兩點" : numberToTaigiText(displayHour) + "點";
    let minText = "";
    if (clockMinute === 30) {
        minText = "半";
    } else if (clockMinute > 0) {
        minText = numberToTaigiText(clockMinute) + "分";
    }
    const text = period + hourText + minText;
    
    playTaigiTTS(text, timeSegments);
}

// ==========================================
// 11. 檢定挑戰模式 (Quiz Engine)
// ==========================================
function startQuiz(type) {
    quizType = type;
    quizScore = 0;
    quizCurrentIndex = 0;
    quizQuestions = [];
    
    document.getElementById("quiz-welcome-panel").style.display = "none";
    document.getElementById("quiz-result-panel").style.display = "none";
    document.getElementById("quiz-game-panel").classList.add("active");
    
    generateQuizPool();
    loadQuizQuestion();
}

function generateQuizPool() {
    for (let i = 0; i < 10; i++) {
        if (quizType === "seller") {
            const randomStation = stations[Math.floor(Math.random() * stations.length)];
            const randomTickets = Math.floor(Math.random() * 5) + 1; // 1~5張
            
            const speechText = `我想欲去${randomStation.nameZH}，買${numberToTaigiText(randomTickets)}張票。`;
            const questionPrompt = "請問語音中，旅客想欲去叨位？買幾張車票？";
            
            // 實體台語音標拼接
            let audioSegments = [];
            audioSegments.push(taigiAudioMap["我"]);
            audioSegments.push(taigiAudioMap["欲"]);
            audioSegments.push(taigiAudioMap["去"]);
            
            const stName = randomStation.nameZH === "台北" ? "臺北" : (randomStation.nameZH === "台中" ? "臺中" : (randomStation.nameZH === "台南" ? "臺南" : (randomStation.nameZH === "台東" ? "臺東" : randomStation.nameZH)));
            const stationAudio = taigiAudioMap[stName];
            if (stationAudio) audioSegments.push(stationAudio);
            
            audioSegments.push(taigiAudioMap["買"]);
            audioSegments = audioSegments.concat(numberToAudioSegments(randomTickets, true));
            audioSegments.push(taigiAudioMap["張"]);
            audioSegments.push(taigiAudioMap["票"]);
            
            const correctAnswer = `${randomStation.nameZH}，${randomTickets}張票`;
            
            let options = [correctAnswer];
            while (options.length < 4) {
                const altStation = stations[Math.floor(Math.random() * stations.length)];
                const altTickets = Math.floor(Math.random() * 5) + 1;
                const altOption = `${altStation.nameZH}，${altTickets}張票`;
                if (!options.includes(altOption)) {
                    options.push(altOption);
                }
            }
            options.sort(() => Math.random() - 0.5);
            
            quizQuestions.push({
                speech: speechText,
                speechPOJ: audioSegments, // 儲存音標陣列以播放實體台語
                prompt: questionPrompt,
                options: options,
                answer: correctAnswer,
                cityId: randomStation.id
            });
            
        } else {
            const randomHour = Math.floor(Math.random() * 12) + 1; // 1~12點
            const minsPresets = [0, 15, 30, 45];
            const randomMin = minsPresets[Math.floor(Math.random() * minsPresets.length)];
            const period = Math.random() > 0.5 ? "下晡" : "早起";
            
            const hourText = randomHour === 2 ? "兩點" : numberToTaigiText(randomHour) + "點";
            const minText = randomMin === 30 ? "半" : (randomMin === 0 ? "" : numberToTaigiText(randomMin) + "分");
            
            const speechText = `火車${period}${hourText}${minText}開車。`;
            const questionPrompt = "請問語音中，火車是幾點開車？";
            
            // 實體台語音標拼接
            let audioSegments = [];
            audioSegments.push(taigiAudioMap["火車"]);
            
            let h = randomHour;
            if (period === "下晡") {
                h = randomHour === 12 ? 12 : randomHour + 12;
            } else if (period === "早起") {
                h = randomHour === 12 ? 0 : randomHour;
            }
            
            const timeSegments = timeToAudioSegments(`${h.toString().padStart(2, '0')}:${randomMin.toString().padStart(2, '0')}`);
            audioSegments = audioSegments.concat(timeSegments);
            audioSegments.push(taigiAudioMap["開車"]);
            
            const digitalTime = `${period} ${randomHour.toString().padStart(2, '0')}:${randomMin.toString().padStart(2, '0')}`;
            const correctAnswer = digitalTime;
            
            let options = [correctAnswer];
            while (options.length < 4) {
                const altHour = Math.floor(Math.random() * 12) + 1;
                const altMin = minsPresets[Math.floor(Math.random() * minsPresets.length)];
                const altPeriod = Math.random() > 0.5 ? "下晡" : "早起";
                const altOption = `${altPeriod} ${altHour.toString().padStart(2, '0')}:${altMin.toString().padStart(2, '0')}`;
                if (!options.includes(altOption)) {
                    options.push(altOption);
                }
            }
            options.sort(() => Math.random() - 0.5);
            
            const rewardStation = stations[Math.floor(Math.random() * stations.length)];
            
            quizQuestions.push({
                speech: speechText,
                speechPOJ: audioSegments, // 儲存音標陣列以播放實體台語
                prompt: questionPrompt,
                options: options,
                answer: correctAnswer,
                cityId: rewardStation.id
            });
        }
    }
}

function loadQuizQuestion() {
    quizHasAnswered = false;
    document.getElementById("quiz-feedback-text").textContent = "";
    document.getElementById("quiz-feedback-text").className = "quiz-feedback";
    
    const q = quizQuestions[quizCurrentIndex];
    currentCorrectAnswer = q.answer;
    
    document.getElementById("quiz-progress-text").textContent = `問題 ${quizCurrentIndex + 1} / 10`;
    document.getElementById("quiz-question-prompt").textContent = q.prompt;
    
    const container = document.getElementById("quiz-options-container");
    container.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => submitQuizAnswer(opt, btn);
        container.appendChild(btn);
    });
    
    setTimeout(() => {
        playTaigiTTS(q.speech, q.speechPOJ);
    }, 400);
    
    quizTimeLeft = 20;
    document.getElementById("quiz-timer-display").innerHTML = `<i class="fa-solid fa-hourglass-half animate-pulse"></i> 剩餘: ${quizTimeLeft}s`;
    
    const bar = document.getElementById("quiz-timer-bar");
    bar.style.transition = "none";
    bar.style.width = "100%";
    
    clearInterval(quizTimerInterval);
    setTimeout(() => {
        bar.style.transition = "width 20s linear";
        bar.style.width = "0%";
    }, 50);
    
    quizTimerInterval = setInterval(() => {
        quizTimeLeft--;
        document.getElementById("quiz-timer-display").innerHTML = `<i class="fa-solid fa-hourglass-half"></i> 剩餘: ${quizTimeLeft}s`;
        
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimerInterval);
            handleQuizTimeout();
        }
    }, 1000);
}

function playQuizQuestionAudio() {
    if (quizQuestions[quizCurrentIndex]) {
        playTaigiTTS(quizQuestions[quizCurrentIndex].speech, quizQuestions[quizCurrentIndex].speechPOJ);
    }
}

function submitQuizAnswer(selectedOpt, selectedBtn) {
    if (quizHasAnswered) return;
    quizHasAnswered = true;
    clearInterval(quizTimerInterval);
    
    const bar = document.getElementById("quiz-timer-bar");
    const computedWidth = window.getComputedStyle(bar).width;
    bar.style.transition = "none";
    bar.style.width = computedWidth;
    
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
    
    const feedback = document.getElementById("quiz-feedback-text");
    const gameCard = document.getElementById("panel-quiz");
    
    if (selectedOpt === currentCorrectAnswer) {
        quizScore++;
        feedback.textContent = "👍 讚喔！答對矣！ (Tio̍h ah!)";
        feedback.className = "quiz-feedback success";
        selectedBtn.classList.add("correct");
        
        gameCard.classList.add("bounce-effect");
        setTimeout(() => gameCard.classList.remove("bounce-effect"), 600);
        triggerConfettiParticles();
        
        playTaigiTTS("著矣", "tio̍h-ah");
    } else {
        feedback.textContent = "❌ 毋對喔！加油！ (M̄-tio̍h--ooh!)";
        feedback.className = "quiz-feedback error";
        selectedBtn.classList.add("wrong");
        
        document.querySelectorAll(".option-btn").forEach(btn => {
            if (btn.textContent === currentCorrectAnswer) {
                btn.classList.add("correct");
            }
        });
        
        gameCard.classList.add("shake");
        setTimeout(() => gameCard.classList.remove("shake"), 500);
        
        playTaigiTTS("毋著喔", "m̄-tio̍h-ooh");
    }
    
    document.getElementById("quiz-score-display").innerHTML = `<i class="fa-solid fa-star" style="color: var(--accent);"></i> 分數: ${quizScore}`;
    setTimeout(nextQuizQuestion, 1800);
}

function handleQuizTimeout() {
    if (quizHasAnswered) return;
    quizHasAnswered = true;
    
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentCorrectAnswer) {
            btn.classList.add("correct");
        }
    });
    
    const feedback = document.getElementById("quiz-feedback-text");
    feedback.textContent = "⏰ 時間到！毋對喔！";
    feedback.className = "quiz-feedback error";
    
    playTaigiTTS("毋著喔", "m̄-tio̍h-ooh");
    setTimeout(nextQuizQuestion, 1800);
}

function nextQuizQuestion() {
    quizCurrentIndex++;
    if (quizCurrentIndex < 10) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById("quiz-game-panel").classList.remove("active");
    document.getElementById("quiz-result-panel").style.display = "block";
    
    document.getElementById("quiz-result-score").textContent = `您的最終得分：${quizScore} / 10 題`;
    
    const rewardsBox = document.getElementById("quiz-rewards-box");
    const stampDisplay = document.getElementById("quiz-unlocked-stamp-display");
    
    if (quizScore >= 8) {
        rewardsBox.style.display = "block";
        
        let unlockedStamps = JSON.parse(localStorage.getItem("rail_stamps")) || [];
        const lockedStations = stations.filter(st => !unlockedStamps.includes(st.id));
        
        let newStampStation = null;
        if (lockedStations.length > 0) {
            newStampStation = lockedStations[Math.floor(Math.random() * lockedStations.length)];
            unlockedStamps.push(newStampStation.id);
            localStorage.setItem("rail_stamps", JSON.stringify(unlockedStamps));
        } else {
            newStampStation = stations[Math.floor(Math.random() * stations.length)];
        }
        
        stampDisplay.innerHTML = `
            <div class="stamp-item unlocked">
                <span class="stamp-icon">${newStampStation.stamp}</span>
                <span class="stamp-name">${newStampStation.nameZH}站</span>
                <span class="stamp-city-zh">${newStampStation.nameEN}</span>
            </div>
            <p style="font-weight:700; color:var(--text); margin-top:10px;">恭喜解鎖【${newStampStation.nameZH}站】紀念印章！已加入您的集章冊！</p>
        `;
        
        triggerConfettiParticles();
        renderStampsAlbum();
    } else {
        rewardsBox.style.display = "none";
        stampDisplay.innerHTML = "";
        
        const failText = document.createElement("p");
        failText.style.margin = "20px 0";
        failText.style.color = "var(--text-light)";
        failText.style.fontWeight = "700";
        failText.textContent = "💡 還差一點點！需要答對 8 題以上才能解鎖印章喔，再接再厲！";
        
        rewardsBox.parentNode.insertBefore(failText, rewardsBox);
    }
}

function resetQuizInterface() {
    clearInterval(quizTimerInterval);
    document.getElementById("quiz-result-panel").style.display = "none";
    document.getElementById("quiz-game-panel").classList.remove("active");
    document.getElementById("quiz-welcome-panel").style.display = "block";
    
    const siblings = document.getElementById("quiz-result-panel").childNodes;
    for (let i = siblings.length - 1; i >= 0; i--) {
        if (siblings[i] && siblings[i].tagName === "P" && siblings[i].textContent.includes("還差一點點")) {
            siblings[i].remove();
        }
    }
}

// ==========================================
// 12. 紀念章集章冊展示
// ==========================================
function renderStampsAlbum() {
    const container = document.getElementById("stamps-container");
    container.innerHTML = "";
    
    const unlockedStamps = JSON.parse(localStorage.getItem("rail_stamps")) || [];
    
    stations.forEach(st => {
        const isUnlocked = unlockedStamps.includes(st.id);
        
        const stampEl = document.createElement("div");
        stampEl.className = `stamp-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        stampEl.title = isUnlocked ? `點擊聆聽【${st.nameZH}】台語發音` : "尚未解鎖";
        
        stampEl.onclick = () => {
            if (isUnlocked) {
                // 傳入 POJ 發音
                playTaigiTTS(st.nameZH, st.poj);
                stampEl.classList.add("bounce-effect");
                setTimeout(() => stampEl.classList.remove("bounce-effect"), 600);
            }
        };
        
        stampEl.innerHTML = `
            <span class="stamp-icon">${isUnlocked ? st.stamp : "🔒"}</span>
            <span class="stamp-name">${st.nameZH}站</span>
            <span class="stamp-city-zh">${st.nameEN}</span>
        `;
        
        container.appendChild(stampEl);
    });
}

// ==========================================
// 13. 微互動粒子效果 (Confetti Particles)
// ==========================================
function triggerConfettiParticles() {
    const mainElement = document.querySelector("main");
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.className = "confetti-particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = "10%";
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 60%)`;
        particle.style.setProperty("--x", `${(Math.random() - 0.5) * 300}px`);
        particle.style.setProperty("--rot", `${Math.random() * 360}deg`);
        
        mainElement.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

// ==========================================
// 14. 系統主題與語系切換
// ==========================================
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("app_theme", targetTheme);
    
    const icon = document.querySelector("#theme-toggle-btn i");
    icon.className = targetTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function toggleLanguage() {
    currentLang = currentLang === "ZH" ? "EN" : "ZH";
    localStorage.setItem("app_lang", currentLang);
    
    updateUI();
    calculateJourney();
    updateClockReadout();
}

function updateSpeechRate(val) {
    speechRate = parseFloat(val);
    localStorage.setItem("app_speech_rate", speechRate);
    updateSpeechRateLabel(val);
}

function updateSpeechRateLabel(val) {
    const label = document.getElementById("speech-rate-label");
    if (label) {
        label.textContent = `${parseFloat(val).toFixed(1)}x`;
    }
}

function switchTab(tabId) {
    selectedTab = tabId;
    
    document.querySelectorAll(".tab-trigger").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`tab-${tabId}-btn`).classList.add("active");
    
    document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
    document.getElementById(`panel-${tabId}`).classList.add("active");
    
    if (tabId === "stamps") {
        renderStampsAlbum();
    }
}

function updateUI() {
    const t = uiStrings[currentLang];
    
    document.getElementById("ui-title").innerHTML = `<i class="fa-solid fa-train-subway"></i> ${t.title}`;
    document.getElementById("ui-subtitle").textContent = t.subtitle;
    document.getElementById("lang-toggle-text").textContent = t.langBtnText;
    
    document.getElementById("ui-tab-adventure").textContent = t.tabAdventure;
    document.getElementById("ui-tab-vocab").textContent = t.tabVocab;
    document.getElementById("ui-tab-time").textContent = t.tabTime;
    document.getElementById("ui-tab-quiz").textContent = t.tabQuiz;
    document.getElementById("ui-tab-stamps").textContent = t.tabStamps;
    
    document.getElementById("ui-booth-title").innerHTML = `<i class="fa-solid fa-ticket"></i> ${t.boothTitle}`;
    document.getElementById("ui-label-from").textContent = t.labelFrom;
    document.getElementById("ui-label-to").textContent = t.labelTo;
    document.getElementById("ui-label-class").textContent = t.labelClass;
    document.getElementById("ui-label-passengers").textContent = t.labelPassengers;
    document.getElementById("ui-label-dep-time").textContent = t.labelDepTime;
    
    document.getElementById("ui-info-direction").textContent = t.infoDirection;
    document.getElementById("ui-info-duration").textContent = t.infoDuration;
    document.getElementById("ui-info-cost").textContent = t.infoCost;
    document.getElementById("ui-info-platform").textContent = t.infoPlatform;
    
    document.getElementById("ui-btn-play-journey").textContent = t.btnPlayJourney;
    document.getElementById("ui-map-title").innerHTML = `<i class="fa-solid fa-compass"></i> ${t.mapTitle}`;
    
    document.getElementById("ui-vocab-title").innerHTML = `<i class="fa-solid fa-book-open"></i> ${t.vocabTitle}`;
    
    document.getElementById("ui-clock-title").innerHTML = `<i class="fa-solid fa-circle-notch"></i> ${t.clockTitle}`;
    document.getElementById("ui-time-learn-title").innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${t.timeLearnTitle}`;
    document.getElementById("ui-label-adjust-time").textContent = t.labelAdjustTime;
    document.getElementById("ui-label-preset-time").textContent = t.labelPresetTime;
    document.getElementById("ui-btn-play-clock").textContent = t.btnPlayClock;
    
    document.getElementById("ui-quiz-title").innerHTML = `<i class="fa-solid fa-gamepad"></i> ${t.quizTitle}`;
    document.getElementById("ui-quiz-welcome-title").textContent = t.quizWelcomeTitle;
    document.getElementById("ui-quiz-welcome-desc").textContent = t.quizWelcomeDesc;
    document.getElementById("ui-quiz-seller-name").textContent = t.quizSellerName;
    document.getElementById("ui-quiz-time-name").textContent = t.quizTimeName;
    document.getElementById("ui-btn-retry").textContent = t.btnRetry;
    
    document.getElementById("ui-stamps-title").innerHTML = `<i class="fa-solid fa-stamp"></i> ${t.stampsTitle}`;
    document.getElementById("ui-stamps-desc").textContent = t.stampsDesc;
}

// 動態綁定所有點擊與選單變更事件，以繞過 Blogger、WordPress 等安全過濾器
function bindDynamicEvents() {
    const bindClick = (id, callback) => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", callback);
            el.removeAttribute("onclick");
        }
    };
    const bindChange = (id, callback) => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("change", callback);
            el.removeAttribute("onchange");
        }
    };

    // 頂部控制列
    bindClick("theme-toggle-btn", toggleTheme);
    bindClick("lang-toggle-btn", toggleLanguage);

    // 主分頁頁籤
    bindClick("tab-adventure-btn", () => switchTab('adventure'));
    bindClick("tab-vocab-btn", () => switchTab('vocab'));
    bindClick("tab-time-btn", () => switchTab('time'));
    bindClick("tab-quiz-btn", () => switchTab('quiz'));
    bindClick("tab-stamps-btn", () => switchTab('stamps'));

    // 售票亭起訖站與下拉選單
    bindChange("start-station", calculateJourney);
    bindChange("end-station", calculateJourney);
    bindChange("train-class", calculateJourney);
    bindChange("departure-time", calculateJourney);
    bindClick("btn-dec-passengers", () => changePassengers(-1));
    bindClick("btn-inc-passengers", () => changePassengers(1));
    bindClick("play-journey-btn", playJourney);

    // 詞彙學堂篩選按鈕
    bindClick("btn-filter-all", () => filterVocab('all'));
    bindClick("btn-filter-vehicles", () => filterVocab('vehicles'));
    bindClick("btn-filter-stations", () => filterVocab('stations'));
    bindClick("btn-filter-tra-station", () => filterVocab('tra-station'));
    bindClick("btn-filter-hsr-station", () => filterVocab('hsr-station'));
    bindClick("btn-export-vocab", exportVocabJSON);

    // 時間微調按鈕
    bindClick("btn-clock-dec-1h", () => adjustClockTime(-60));
    bindClick("btn-clock-dec-15m", () => adjustClockTime(-15));
    bindClick("btn-clock-inc-15m", () => adjustClockTime(15));
    bindClick("btn-clock-inc-1h", () => adjustClockTime(60));

    // 時間快捷預設按鈕
    bindClick("btn-clock-preset-8-0", () => setClockTime(8, 0));
    bindClick("btn-clock-preset-10-30", () => setClockTime(10, 30));
    bindClick("btn-clock-preset-12-15", () => setClockTime(12, 15));
    bindClick("btn-clock-preset-15-30", () => setClockTime(15, 30));
    bindClick("btn-clock-preset-17-45", () => setClockTime(17, 45));
    bindClick("btn-clock-preset-20-0", () => setClockTime(20, 0));

    // 播放時間語音按鈕
    bindClick("play-clock-btn", playClockAudio);

    // 檢定挑戰按鈕
    bindClick("btn-quiz-seller", () => startQuiz('seller'));
    bindClick("btn-quiz-time", () => startQuiz('time'));
    bindClick("quiz-audio-play-btn", playQuizQuestionAudio);
    bindClick("quiz-retry-btn", resetQuizInterface);
}


function exportVocabJSON() {
    const exportData = {
        title: "台灣鐵路台語詞彙庫",
        description: "Taiwan Railway Taiwanese (Taigi) Vocabulary — generated by 台灣鐵路四界行",
        generated: new Date().toISOString(),
        source_audio_cdn: "https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/{id}.mp3",
        sections: {
            vehicles: vocabData.filter(v => v.type === 'vehicles').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            scene:    vocabData.filter(v => v.type === 'stations').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            stations: {
                "TRA": vocabData.filter(v => v.type === 'tra-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                }),
                "HSR": vocabData.filter(v => v.type === 'hsr-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                })
            }
        }
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taiwan_railway_taigi_vocab.json';
    a.click();
    URL.revokeObjectURL(url);
}

function exportVocabJSON() {
    const exportData = {
        title: "台灣鐵路台語詞彙庫",
        description: "Taiwan Railway Taiwanese (Taigi) Vocabulary — generated by 台灣鐵路四界行",
        generated: new Date().toISOString(),
        source_audio_cdn: "https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/{id}.mp3",
        sections: {
            vehicles: vocabData.filter(v => v.type === 'vehicles').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            scene:    vocabData.filter(v => v.type === 'stations').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            stations: {
                "TRA": vocabData.filter(v => v.type === 'tra-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                }),
                "HSR": vocabData.filter(v => v.type === 'hsr-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                })
            }
        }
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taiwan_railway_taigi_vocab.json';
    a.click();
    URL.revokeObjectURL(url);
}

function exportVocabJSON() {
    const exportData = {
        title: "台灣鐵路台語詞彙庫",
        description: "Taiwan Railway Taiwanese (Taigi) Vocabulary — generated by 台灣鐵路四界行",
        generated: new Date().toISOString(),
        source_audio_cdn: "https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/{id}.mp3",
        sections: {
            vehicles: vocabData.filter(v => v.type === 'vehicles').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            scene:    vocabData.filter(v => v.type === 'stations').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            stations: {
                "TRA": vocabData.filter(v => v.type === 'tra-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                }),
                "HSR": vocabData.filter(v => v.type === 'hsr-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                })
            }
        }
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taiwan_railway_taigi_vocab.json';
    a.click();
    URL.revokeObjectURL(url);
}

function exportVocabJSON() {
    const exportData = {
        title: "台灣鐵路台語詞彙庫",
        description: "Taiwan Railway Taiwanese (Taigi) Vocabulary — generated by 台灣鐵路四界行",
        generated: new Date().toISOString(),
        source_audio_cdn: "https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/{id}.mp3",
        sections: {
            vehicles: vocabData.filter(v => v.type === 'vehicles').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            scene:    vocabData.filter(v => v.type === 'stations').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            stations: {
                "TRA": vocabData.filter(v => v.type === 'tra-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                }),
                "HSR": vocabData.filter(v => v.type === 'hsr-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                })
            }
        }
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taiwan_railway_taigi_vocab.json';
    a.click();
    URL.revokeObjectURL(url);
}

function exportVocabJSON() {
    const exportData = {
        title: "台灣鐵路台語詞彙庫",
        description: "Taiwan Railway Taiwanese (Taigi) Vocabulary — generated by 台灣鐵路四界行",
        generated: new Date().toISOString(),
        source_audio_cdn: "https://chhoetaigi.github.io/KipSutianDataMirror/public/20260503-2330/imtong/sutiau/{id}.mp3",
        sections: {
            vehicles: vocabData.filter(v => v.type === 'vehicles').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            scene:    vocabData.filter(v => v.type === 'stations').map(v => ({ zh: v.zh, tw: v.tw, en: v.en, emoji: v.emoji })),
            stations: {
                "TRA": vocabData.filter(v => v.type === 'tra-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                }),
                "HSR": vocabData.filter(v => v.type === 'hsr-station').map(v => {
                    const st = stations.find(s => s.id === v.id);
                    return { zh: v.zh, tw: v.tw, en: v.en, id: v.id, audio_id: st ? st.audioId : null };
                })
            }
        }
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taiwan_railway_taigi_vocab.json';
    a.click();
    URL.revokeObjectURL(url);
}
