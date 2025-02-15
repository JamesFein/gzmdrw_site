const geneIndexMockData = {
  tableData: [
    ["Darmor", "BnaA02g12130D", "chrA02", "6375936", "6379058"],
    ["Darmor", "BnaA07g25310D", "chrA07", "18855196", "18857952"],
    ["Darmor", "BnaA07g33120D", "chrA07", "22787807", "22790354"],
    ["Darmor", "BnaC02g45250D", "chrC02_random", "996695", "998788"],
    ["Darmor", "BnaC04g14850D", "chrC04", "12435074", "12437644"],
    ["Darmor", "BnaC06g27090D", "chrC06", "28552966", "28555216"],
    ["Darmor_bzh", "A02p13240.1_BnaDAR", "A02", "9117702", "9120546"],
    ["Darmor_bzh", "A07p32850.1_BnaDAR", "A07", "23254906", "23257253"],
    ["Darmor_bzh", "A07p42500.1_BnaDAR", "A07", "28026790", "28030397"],
    ["Darmor_bzh", "C02p21420.1_BnaDAR", "C02", "15293528", "15295314"],
    ["Darmor_bzh", "C04p21000.1_BnaDAR", "C04", "16779172", "16782123"],
    ["Darmor_bzh", "C06p39080.1_BnaDAR", "C06", "40582844", "40585158"],
    ["Express617", "A02p017120.1_BnaEXP", "chrA02", "10023447", "10034054"],
    ["Express617", "A07p033170.1_BnaEXP", "chrA07", "25418148", "25419260"],
    ["Express617", "A08p003900.1_BnaEXP", "chrA08", "3663062", "3665521"],
    ["Express617", "C02p045130.1_BnaEXP", "chrC02", "53728124", "53729068"],
    ["Express617", "C04p026460.1_BnaEXP", "chrC04", "31259684", "31261188"],
    ["Express617", "C06p028960.1_BnaEXP", "chrC06", "37222405", "37224717"],
    ["Gangan", "BnaA02G0152300GG", "ganganF73v0_A02", "9015118", "9018260"],
    ["Gangan", "BnaA07G0279500GG", "ganganF73v0_A07", "30621261", "30623638"],
    ["Gangan", "BnaA07G0378800GG", "ganganF73v0_A07", "36537997", "36539969"],
    ["Gangan", "BnaC02G0184100GG", "ganganF73v0_C02", "16297184", "16299761"],
    ["Gangan", "BnaA03G0499400GG", "ganganF73v0_A03", "30064388", "30067339"],
    ["Gangan", "BnaC06G0311400GG", "ganganF73v0_C06", "42346529", "42348857"],
    ["No2127", "BnaA02G0156600NO", "no2127v0_A02", "9458006", "9460824"],
    ["No2127", "BnaA07G0275700NO", "no2127v0_A07", "26355643", "26358010"],
    ["No2127", "BnaC02G0153000NO", "no2127v0_C02", "14396304", "14398855"],
    ["No2127", "BnaC04G0172900NO", "no2127v0_C04", "16549427", "16552379"],
    ["No2127", "BnaC06G0313200NO", "no2127v0_C06", "41633487", "41636043"],
    ["Quinta", "BnaA02G0156700QU", "quintaAv0_A02", "9321865", "9324927"],
    ["Quinta", "BnaA07G0239900QU", "quintaAv0_A07", "22980962", "22983309"],
    ["Quinta", "BnaA07G0320800QU", "quintaAv0_A07", "27721818", "27724959"],
    ["Quinta", "BnaC02G0154400QU", "quintaAv0_C02", "14256706", "14258708"],
    ["Quinta", "BnaC04G0173400QU", "quintaAv0_C04", "16658391", "16661342"],
    ["Quinta", "BnaC06G0319300QU", "quintaAv0_C06", "43012919", "43015223"],
    ["Shengli", "BnaA02G0159500SL", "shengli3v0_A02", "9737831", "9740994"],
    ["Shengli", "BnaA07G0266400SL", "shengli3v0_A07", "26403387", "26406374"],
    ["Shengli", "BnaA07G0346400SL", "shengli3v0_A07", "30940935", "30944076"],
    ["Shengli", "BnaC02G0115900SL", "shengli3v0_C02", "10504732", "10507335"],
    ["Shengli", "BnaC04G0170300SL", "shengli3v0_C04", "16869817", "16872768"],
    ["Shengli", "BnaC06G0308400SL", "shengli3v0_C06", "41709628", "41712393"],
    ["Tapidor", "BnaA02G0121300TA", "tapidor3v0_A02", "7437317", "7440473"],
    ["Tapidor", "BnaA07G0275500TA", "tapidor3v0_A07", "25991503", "25991811"],
    ["Tapidor", "BnaA07G0355205TA", "tapidor3v0_A07", "30556066", "30559207"],
    ["Tapidor", "BnaC02G0121500TA", "tapidor3v0_C02", "11748774", "11750865"],
    ["Tapidor", "BnaC04G0154400TA", "tapidor3v0_C04", "15458303", "15461254"],
    ["Tapidor", "BnaC06G0304900TA", "tapidor3v0_C06", "42629460", "42632226"],
    ["Westar", "BnaA02G0157300WE", "westarv0_A02", "9101609", "9104386"],
    ["Westar", "BnaA07G0277700WE", "westarv0_A07", "26988713", "26991059"],
    ["Westar", "BnaA07G0361000WE", "westarv0_A07", "31755549", "31758690"],
    ["Westar", "BnaC02G0193500WE", "westarv0_C02", "17000619", "17003124"],
    ["Westar", "BnaC04G0175500WE", "westarv0_C04", "16910684", "16913634"],
    ["Westar", "BnaC06G0346000WE", "westarv0_C06", "42813088", "42815666"],
    ["Zheyou7", "BnaA02G0181200ZY", "zheyou73v0_A02", "11460192", "11462754"],
    ["Zheyou7", "BnaA07G0229100ZY", "zheyou73v0_A07", "22206400", "22208759"],
    ["Zheyou7", "BnaA07G0311100ZY", "zheyou73v0_A07", "26966628", "26968378"],
    ["Zheyou7", "BnaC02G0268900ZY", "zheyou73v0_C02", "40453242", "40455858"],
    ["Zheyou7", "BnaC04G0156900ZY", "zheyou73v0_C04", "15201143", "15204218"],
    ["Zheyou7", "BnaC06G0307800ZY", "zheyou73v0_C06", "42341626", "42344448"],
    ["ZS11", "BnaA02G0156900ZS", "A02", "9104462", "9107270"],
    ["ZS11", "BnaA07G0282700ZS", "A07", "26253195", "26255955"],
    ["ZS11", "BnaA07G0365100ZS", "A07", "30986418", "30988169"],
    ["ZS11", "BnaC02G0200600ZS", "C02", "16837203", "16838959"],
    ["ZS11", "BnaC04G0181400ZS", "C04", "17070818", "17073769"],
    ["ZS11", "BnaC06G0323800ZS", "C06", "42937446", "42939746"],
  ],
};

// Genome groups data
const genomeGroupsData = {
  categories: [
    "ZS11",
    "Darmor",
    "Darmor_bzh",
    "Express617",
    "gangganF73",
    "No2127",
    "Ningyou7",
    "Quinta",
    "Shengli",
    "Tapidor",
    "Westar",
    "Zheyou",
  ],
  series: [
    { name: "A02", data: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1] },
    { name: "A07", data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { name: "C02", data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { name: "C04", data: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1] },
    { name: "C06", data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { name: "A08", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: "A03", data: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1] },
  ],
};

// Chromosome distribution data
const chromosomeData = {
  categories: ["A02", "A07", "C02", "C04", "C06", "A08", "A03"],
  series: [
    { name: "ZS11", data: [2, 1, 0, 1, 2, 0, 1] },
    { name: "Darmor", data: [1, 2, 1, 0, 1, 0, 2] },
    { name: "Darmor_bzh", data: [2, 0, 1, 2, 0, 1, 1] },
    { name: "Express617", data: [1, 1, 2, 0, 1, 0, 2] },
    { name: "gangganF73", data: [0, 2, 1, 1, 0, 1, 2] },
    { name: "No2127", data: [1, 0, 2, 1, 1, 0, 2] },
    { name: "Ningyou7", data: [2, 1, 0, 2, 1, 0, 1] },
    { name: "Quinta", data: [1, 2, 1, 0, 2, 1, 0] },
    { name: "Shengli", data: [2, 0, 1, 1, 0, 2, 1] },
    { name: "Tapidor", data: [0, 1, 2, 1, 1, 0, 2] },
    { name: "Westar", data: [1, 2, 0, 1, 2, 1, 0] },
    { name: "Zheyou", data: [2, 1, 1, 0, 1, 2, 0] },
  ],
};

// Chart colors
const chartColors = [
  "#5470c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
];

// Basic Information of Genes data
const geneBasicInfoData = {
  tableData: [
    [
      "BnaA02G0156900ZS", // ZS11 Gene ID
      "BnaA02g12130D", // Darmor Gene ID
      "BnaA02g12130D", // Darmor-bzh Gene ID
      "BnaA02g12130D", // Express617 Gene ID
      "BnaA02g12130D", // GanganF73 Gene ID
      "BnaA02g12130D", // No2127 Gene ID
      "BnaA02g12130D", // NY7 Gene ID
      "BnaA02g12130D", // quinta Gene ID
      "BnaA02g12130D", // Shengli3 Gene ID
      "BnaA02g12130D", // Tapidor3 Gene ID
      "BnaA02g12130D", // Westar Gene ID
      "BnaA02g12130D", // Zheyou73 Gene ID
    ],
    // ... 可以添加更多行数据
  ],
};
