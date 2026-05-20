import type { Project } from "../types/project";
import { projectImages } from "../assets/images";

export const projects: Project[] = [
  {
    id: "velvet-gown",
    title: "فستان سهرة مخملي دافئ",
    category: "Women",
    description:
      "فستان سهرة مخيط من قماش القطيفة (المخمل) الناعم باللون الخمري الدافئ، مصمم بلمسة كلاسيكية أنثوية ليناسب المناسبات العائلية الخاصة.",
    longDescription:
      "تم تفصيل هذا الفستان بالكامل يدوياً في مشغلي المنزلي. استخدمت فيه مخمل ناعم ثقيل الوزن يتدلى بنعومة على الجسم مع ياقة مفتوحة أنيقة وتطريز بسيط على الأكمام يعكس الطابع اليدوي الفريد.",
    coverImage: projectImages[0],
    images: [
      projectImages[0],
      projectImages[1],
      projectImages[2],
      projectImages[3],
    ],
    clientName: "سارة عبد الله",
    date: "مايو ٢٠٢٦",
    sewingDate: "مايو ٢٠٢٦",
    specs: {
      fabric: "مخمل إيطالي ناعم",
      duration: "٥ أيام",
      serviceType: "تفصيل كامل",
    },
    fabricInfo: {
      type: "مخمل إيطالي ناعم",
      quantity: "3.5 أمتار",
      meterPrice: "4300 دج",
      totalPrice: "15050 دج",
    },
    supplies: [
      { item: "سحاب مخفي", quantity: 1, price: "450 دج" },
      { item: "خيط تطريز", quantity: 3, price: "450 دج" },
      { item: "بطانة داخلية", quantity: 1, price: "800 دج" },
    ],
    suppliesTotal: "1700 دج",
    summary: {
      fabricCost: "15050 دج",
      sewingCost: "3200 دج",
      totalCost: "19950 دج",
    },
    notes:
      "تفصيل فستان سهرة مخملي فاخر بلمسات كلاسيكية وتطريز ناعم على الأكمام لضمان مظهر أنيق وفاخر.",
  },
  {
    id: "classic-abaya",
    title: "عباءة كلاسيكية مطرزة يدوياً",
    category: "Traditional",
    description:
      "عباءة سوداء أنيقة بقماش منسدل وتفاصيل تطريز ناعمة بخيوط الحرير على الأكمام، تناسب الإطلالات اليومية والمناسبات.",
    longDescription:
      "عباءة سوداء مصممة بقصّة مريحة وأكمام واسعة. تم إدخال خيوط حريرية وتطريزها يدوياً بدقة متناهية على أطراف الأكمام لتعطي مظهراً يجمع بين الفخامة والبساطة.",
    coverImage: projectImages[1],
    images: [
      projectImages[1],
      projectImages[2],
      projectImages[3],
      projectImages[4],
    ],
    clientName: "ريم خالد",
    date: "أبريل ٢٠٢٦",
    sewingDate: "أبريل ٢٠٢٦",
    specs: {
      fabric: "حرير الكريب الأسود",
      duration: "٤ أيام",
      serviceType: "تفصيل خاص",
    },
    fabricInfo: {
      type: "حرير الكريب الأسود",
      quantity: "4 أمتار",
      meterPrice: "2900 دج",
      totalPrice: "11600 دج",
    },
    supplies: [
      { item: "خيط حرير", quantity: 2, price: "500 دج" },
      { item: "بطانة خفيفة", quantity: 1, price: "700 دج" },
      { item: "أزرار زخرفية", quantity: 4, price: "300 دج" },
    ],
    suppliesTotal: "1500 دج",
    summary: {
      fabricCost: "11600 دج",
      sewingCost: "3300 دج",
      totalCost: "16400 دج",
    },
    notes:
      "عباءة سوداء مطرزة يدوياً بخامة حرير كريب فاخرة وتصميم مريح يناسب السهرات والمناسبات الرسمية.",
  },
  {
    id: "moroccan-kaftan",
    title: "قفطان ناعم للمناسبات",
    category: "Traditional",
    description:
      "قفطان شرقي تقليدي مصنوع من قماش الحرير المنسدل ومطرز بخيوط ذهبية ناعمة لإطلالة راقية في الأعياد والمناسبات.",
    longDescription:
      "تصميم قفطان يجمع بين التراث والأناقة العصرية. مصنوع من الحرير الطبيعي الناعم ومزين بالسفيفة والخطوط الذهبية المطرزة يدوياً لضمان الراحة التامة والمظهر البهي.",
    coverImage: projectImages[2],
    images: [
      projectImages[2],
      projectImages[3],
      projectImages[4],
      projectImages[5],
    ],
    clientName: "فاطمة عمر",
    date: "أبريل ٢٠٢٦",
    sewingDate: "أبريل ٢٠٢٦",
    specs: {
      fabric: "حرير طبيعي وجاكار",
      duration: "٦ أيام",
      serviceType: "خياطة تراثية",
    },
    fabricInfo: {
      type: "حرير طبيعي وجاكار",
      quantity: "5 أمتار",
      meterPrice: "2400 دج",
      totalPrice: "12000 دج",
    },
    supplies: [
      { item: "خيط ذهبي", quantity: 2, price: "600 دج" },
      { item: "بطانة ناعمة", quantity: 1, price: "700 دج" },
      { item: "شرائط زخرفية", quantity: 1, price: "500 دج" },
    ],
    suppliesTotal: "1800 دج",
    summary: {
      fabricCost: "12000 دج",
      sewingCost: "3350 دج",
      totalCost: "17150 دج",
    },
    notes:
      "قفطان شرقي حريري مع تطريز ذهبي يدوي لتصميم أنيق ومناسب للمناسبات الخاصة.",
  },
  {
    id: "kids-dress",
    title: "فستان أطفال من الدانتيل والقطن",
    category: "Kids",
    description:
      "فستان بناتي رقيق مدمج بالدانتيل الفاخر والقطن العضوي الناعم لراحة ابنتك في الأعياد وجلسات التصوير.",
    longDescription:
      "صممت هذا الفستان مع التركيز على راحة الطفل. البطانة مصنوعة من القطن الصافي بنسبة ١٠٠٪ لتجنب حساسية الجلد، مع طبقة علوية من الدانتيل المشغول يدوياً بوردات ناعمة.",
    coverImage: projectImages[3],
    images: [
      projectImages[3],
      projectImages[4],
      projectImages[5],
      projectImages[0],
    ],
    clientName: "أميرة يوسف",
    date: "مارس ٢٠٢٦",
    sewingDate: "مارس ٢٠٢٦",
    specs: {
      fabric: "قطن خالص ودانتيل فرنسي",
      duration: "٣ أيام",
      serviceType: "ملابس أطفال مخصصة",
    },
    fabricInfo: {
      type: "قطن خالص ودانتيل فرنسي",
      quantity: "2.5 أمتار",
      meterPrice: "1200 دج",
      totalPrice: "3000 دج",
    },
    supplies: [
      { item: "دانتيل إضافي", quantity: 1, price: "350 دج" },
      { item: "بطانة داخلية", quantity: 1, price: "450 دج" },
      { item: "خيط تطريز", quantity: 1, price: "150 دج" },
    ],
    suppliesTotal: "950 دج",
    summary: {
      fabricCost: "3000 دج",
      sewingCost: "1900 دج",
      totalCost: "5850 دج",
    },
    notes:
      "فستان أطفال عملي وناعم مع بطانة قطنية كاملة ودانتيل هادئ، مناسب للبنات الصغيرات في المناسبات والأعياد.",
  },
  {
    id: "linen-blouse",
    title: "قميص صيفي من الكتان الطبيعي",
    category: "Women",
    description:
      "بلوزة صيفية خفيفة وباردة مصنوعة من الكتان الطبيعي بتفاصيل أزرار خشبية وقصة فضفاضة مريحة.",
    longDescription:
      "قطعة صيفية أساسية بامتياز، تفصيل يدوي واسع من الكتان الطبيعي المغسول مسبقاً لمنع الانكماش. تفاصيل يدوية ناعمة حول العنق والجيوب تمنح القميص طابع الصنع المنزلي الدافئ.",
    coverImage: projectImages[4],
    images: [
      projectImages[4],
      projectImages[5],
      projectImages[0],
      projectImages[1],
    ],
    clientName: "هند أحمد",
    date: "مارس ٢٠٢٦",
    sewingDate: "مارس ٢٠٢٦",
    specs: {
      fabric: "كتان بلجيكي طبيعي",
      duration: "يومين",
      serviceType: "خياطة يومية عصرية",
    },
    fabricInfo: {
      type: "كتان بلجيكي طبيعي",
      quantity: "2.2 أمتار",
      meterPrice: "1450 دج",
      totalPrice: "3190 دج",
    },
    supplies: [
      { item: "أزرار خشبية", quantity: 5, price: "250 دج" },
      { item: "خيط كتان", quantity: 1, price: "150 دج" },
      { item: "بطانة خفيفة", quantity: 1, price: "300 دج" },
    ],
    suppliesTotal: "700 دج",
    summary: {
      fabricCost: "3190 دج",
      sewingCost: "1500 دج",
      totalCost: "5390 دج",
    },
    notes:
      "بلوزة صيفية من الكتان الطبيعي مع تفاصيل دقيقة وأزرار خشبية تعطيها لمسة يدوية أنيقة ومريحة.",
  },
  {
    id: "dress-alterations",
    title: "تعديل وتطريز فستان زفاف عتيق",
    category: "Custom",
    description:
      "إعادة تصميم وتضييق فستان زفاف عائلي قديم ليتطابق مع مقاسات العروس الجديدة وتجديد التطريز التالف.",
    longDescription:
      "من الأعمال المفضلة لقلبي، قمنا بإعادة بناء الصدر والأكتاف لفستان زفاف عتيق يعود لـ ٢٠ عاماً مضت، ليتناسب تماماً مع قوام العروس، مع تنظيف الدانتيل القديم وإضافة خرز لؤلؤي ناعم بلمسات يدوية.",
    coverImage: projectImages[5],
    images: [
      projectImages[5],
      projectImages[0],
      projectImages[1],
      projectImages[2],
    ],
    clientName: "منى علي",
    date: "فبراير ٢٠٢٦",
    sewingDate: "فبراير ٢٠٢٦",
    specs: {
      fabric: "حرير التفتا ودانتيل عتيق",
      duration: "٧ أيام",
      serviceType: "تعديل وترميم",
    },
    fabricInfo: {
      type: "حرير التفتا ودانتيل عتيق",
      quantity: "3 أمتار",
      meterPrice: "2000 دج",
      totalPrice: "6000 دج",
    },
    supplies: [
      { item: "شريط تقوية", quantity: 1, price: "250 دج" },
      { item: "خيط حرير", quantity: 1, price: "150 دج" },
      { item: "تعزيز داخلي", quantity: 1, price: "200 دج" },
    ],
    suppliesTotal: "600 دج",
    summary: {
      fabricCost: "6000 دج",
      sewingCost: "2800 دج",
      totalCost: "9400 دج",
    },
    notes:
      "تعديل فستان زفاف عتيق بعناية خاصة، مع تنظيف الدانتيل القديم وإضافة دعم داخلي لخياطة متينة ومظهر نظيف.",
  },
  {
    id: "bridal-gown-lace",
    title: "فستان زفاف دانتيل فاخر",
    category: "Women",
    description:
      "فستان زفاف أنيق مصنوع من الدانتيل الفرنسي بتفاصيل يدوية ناعمة وقصة ملكية.",
    longDescription:
      "تم تصميم هذا الفستان بعناية ليتناسب مع حفلات الزفاف الراقية. يحتوي على تطريز يدوي بخيوط فضية وأكمام دانتيل شفافة تمنح مظهراً فاخراً.",
    coverImage: projectImages[0],
    images: [
      projectImages[0],
      projectImages[2],
      projectImages[4],
      projectImages[5],
    ],
    clientName: "أسماء بوعلام",
    date: "يونيو ٢٠٢٦",
    sewingDate: "يونيو ٢٠٢٦",
    specs: {
      fabric: "دانتيل فرنسي وحرير",
      duration: "٨ أيام",
      serviceType: "فستان زفاف",
    },
    fabricInfo: {
      type: "دانتيل فرنسي وحرير",
      quantity: "6 أمتار",
      meterPrice: "2200 دج",
      totalPrice: "13200 دج",
    },
    supplies: [
      { item: "خرز لؤلؤي", quantity: 1, price: "900 دج" },
      { item: "بطانة فاخرة", quantity: 1, price: "800 دج" },
      { item: "خيط تطريز", quantity: 2, price: "300 دج" },
    ],
    suppliesTotal: "2000 دج",
    summary: {
      fabricCost: "13200 دج",
      sewingCost: "4200 دج",
      totalCost: "19400 دج",
    },
    notes:
      "فستان زفاف دانتيل فاخر بتطريز يدوي ولمسات لؤلؤية، تم تنفيذه بعناية ليعكس فخامة وأناقة العروس.",
  },

  {
    id: "traditional-algerian-karakou",
    title: "كراكو جزائري مطرز",
    category: "Traditional",
    description: "كراكو جزائري تقليدي بخياطة يدوية وتطريز ذهبي فاخر.",
    longDescription:
      "قطعة مستوحاة من التراث الجزائري مع تطريز يدوي بخيوط ذهبية وسروال شلقة تقليدي. تم تنفيذها بعناية للحفاظ على الأصالة.",
    coverImage: projectImages[2],
    images: [
      projectImages[2],
      projectImages[1],
      projectImages[3],
      projectImages[4],
    ],
    clientName: "إيمان زروقي",
    date: "مايو ٢٠٢٦",
    sewingDate: "مايو ٢٠٢٦",
    specs: {
      fabric: "مخمل وتطريز ذهبي",
      duration: "٧ أيام",
      serviceType: "خياطة تقليدية",
    },
    fabricInfo: {
      type: "مخمل وتطريز ذهبي",
      quantity: "5 أمتار",
      meterPrice: "2100 دج",
      totalPrice: "10500 دج",
    },
    supplies: [
      { item: "خيط ذهبي", quantity: 2, price: "800 دج" },
      { item: "بطانة داخلية", quantity: 1, price: "700 دج" },
      { item: "شرائط زخرفية", quantity: 1, price: "350 دج" },
    ],
    suppliesTotal: "1850 دج",
    summary: {
      fabricCost: "10500 دج",
      sewingCost: "3600 دج",
      totalCost: "15950 دج",
    },
    notes:
      "كراكو جزائري تقليدي مزين بتطريز يدوي ذهبي وقطعة داخلية مدعمة لتضمن الراحة والأناقة.",
  },

  {
    id: "mens-classic-suit",
    title: "بدلة رجالية كلاسيكية",
    category: "Men",
    description: "بدلة رجالية أنيقة مصممة بتفصيل مخصص للمناسبات الرسمية.",
    longDescription:
      "تم استخدام قماش فاخر مع قصّة دقيقة لتوفير راحة وأناقة في نفس الوقت. تشمل جاكيت وسروال بخياطة احترافية.",
    coverImage: projectImages[4],
    images: [
      projectImages[4],
      projectImages[3],
      projectImages[0],
      projectImages[2],
    ],
    clientName: "محمد بن عمر",
    date: "يونيو ٢٠٢٦",
    sewingDate: "يونيو ٢٠٢٦",
    specs: {
      fabric: "صوف إيطالي",
      duration: "٦ أيام",
      serviceType: "تفصيل رجال",
    },
    fabricInfo: {
      type: "صوف إيطالي",
      quantity: "4.5 أمتار",
      meterPrice: "2600 دج",
      totalPrice: "11700 دج",
    },
    supplies: [
      { item: "أزرار معدنية", quantity: 5, price: "300 دج" },
      { item: "بطانة داخلية", quantity: 1, price: "900 دج" },
      { item: "خيط خياطة", quantity: 1, price: "400 دج" },
    ],
    suppliesTotal: "1600 دج",
    summary: {
      fabricCost: "11700 دج",
      sewingCost: "4500 دج",
      totalCost: "17800 دج",
    },
    notes:
      "بدلة رجالية كلاسيكية مع تفصيل دقيق وخياطة متينة لتوفير راحة وأناقة لكل مناسبة رسمية.",
  },

  {
    id: "baby-handmade-set",
    title: "طقم أطفال يدوي للأعياد",
    category: "Kids",
    type: "ستايل قسنطيني",
    description: "طقم أطفال بخياطة يدوية ناعمة ومريحة مع ألوان هادئة.",
    longDescription:
      "تم تصميم هذا الطقم باستخدام خامات قطنية ناعمة مناسبة لبشرة الأطفال الحساسة مع إضافات دانتيل خفيف.",
    coverImage: projectImages[5],
    images: [
      projectImages[5],
      projectImages[1],
      projectImages[4],
      projectImages[2],
    ],
    clientName: "ندى صالح",
    date: "مايو ٢٠٢٦",
    sewingDate: "مايو ٢٠٢٦",
    specs: {
      fabric: "مخمل إيطالي ناعم",
      duration: "٥ أيام",
      serviceType: "تفصيل كامل",
    },
    fabricInfo: {
      type: "مخمل إيطالي ناعم",
      quantity: "3 أمتار",
      meterPrice: "4534 دج",
      totalPrice: "13600 دج",
    },
    supplies: [
      { item: "سحاب مخفي", quantity: 1, price: "450 دج" },
      { item: "خيط تطريز", quantity: 2, price: "300 دج" },
      { item: "بطانة داخلية", quantity: 1, price: "600 دج" },
    ],
    suppliesTotal: "1350 دج",
    summary: {
      fabricCost: "13600 دج",
      sewingCost: "3357 دج",
      totalCost: "18307 دج",
    },
    notes:
      "تم تفصيل هذا الطقم بالكامل يدوياً من خامات قطنية مميزة مناسبة لبشرة الأطفال الحساسة، مع لمسات دانتيل خفيف لتصميم أنيق وعصري.",
  },

  {
    id: "custom-cushion-cover",
    title: "أغطية وسائد مطرزة حسب الطلب",
    category: "Custom",
    description: "تصميم أغطية وسائد بخياطة يدوية ونقوش مخصصة للمنزل.",
    longDescription:
      "تم تنفيذ مجموعة أغطية وسائد بتصميم مخصص حسب طلب العميل مع تطريز الأسماء والزخارف اليدوية.",
    coverImage: projectImages[1],
    images: [
      projectImages[1],
      projectImages[5],
      projectImages[3],
      projectImages[0],
    ],
    clientName: "ليلى منصور",
    date: "مايو ٢٠٢٦",
    sewingDate: "مايو ٢٠٢٦",
    specs: {
      fabric: "قطن وكتان",
      duration: "٤ أيام",
      serviceType: "ديكور منزلي",
    },
    fabricInfo: {
      type: "قطن وكتان",
      quantity: "1.5 أمتار",
      meterPrice: "900 دج",
      totalPrice: "1350 دج",
    },
    supplies: [
      { item: "سحاب مخفي", quantity: 1, price: "450 دج" },
      { item: "خيط خياطة", quantity: 1, price: "150 دج" },
      { item: "خرز مطرز", quantity: 1, price: "250 دج" },
    ],
    suppliesTotal: "850 دج",
    summary: {
      fabricCost: "1350 دج",
      sewingCost: "900 دج",
      totalCost: "3100 دج",
    },
    notes:
      "أغطية وسائد مخصصة بخياطة يدوية ونقوش شخصية، مصنوعة من خامات قطنية مريحة ومناسبة للديكور المنزلي.",
  },

  {
    id: "ramadan-kaftan",
    title: "قفطان رمضاني عصري",
    category: "Traditional",
    description: "قفطان ناعم بتصميم عصري مناسب للسهرات الرمضانية.",
    longDescription:
      "تصميم يجمع بين البساطة والأناقة مع أكمام واسعة وتطريز يدوي ناعم بخيوط ذهبية.",
    coverImage: projectImages[3],
    images: [
      projectImages[3],
      projectImages[0],
      projectImages[2],
      projectImages[4],
    ],
    clientName: "رحمة بوشارب",
    date: "أبريل ٢٠٢٦",
    sewingDate: "أبريل ٢٠٢٦",
    specs: {
      fabric: "حرير وجاكار",
      duration: "٥ أيام",
      serviceType: "قفطان مخصص",
    },
    fabricInfo: {
      type: "حرير وجاكار",
      quantity: "4.8 أمتار",
      meterPrice: "2250 دج",
      totalPrice: "10800 دج",
    },
    supplies: [
      { item: "خيط ذهبي", quantity: 2, price: "600 دج" },
      { item: "بطانة ناعمة", quantity: 1, price: "700 دج" },
      { item: "شرائط مزخرفة", quantity: 1, price: "300 دج" },
    ],
    suppliesTotal: "1600 دج",
    summary: {
      fabricCost: "10800 دج",
      sewingCost: "3400 دج",
      totalCost: "15800 دج",
    },
    notes:
      "قفطان رمضاني براقة بخامات حريرية وتطريز يدوي ناعم مناسب للسهرات العائلية والمناسبات الخاصة.",
  },
];
