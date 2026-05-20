import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'velvet-gown',
    title: 'فستان سهرة مخملي دافئ',
    category: 'Women',
    description: 'فستان سهرة مخيط من قماش القطيفة (المخمل) الناعم باللون الخمري الدافئ، مصمم بلمسة كلاسيكية أنثوية ليناسب المناسبات العائلية الخاصة.',
    longDescription: 'تم تفصيل هذا الفستان بالكامل يدوياً في مشغلي المنزلي. استخدمت فيه مخمل ناعم ثقيل الوزن يتدلى بنعومة على الجسم مع ياقة مفتوحة أنيقة وتطريز بسيط على الأكمام يعكس الطابع اليدوي الفريد.',
    coverImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800'],
    clientName: 'سارة عبد الله',
    date: 'مايو ٢٠٢٦',
    specs: {
      fabric: 'مخمل إيطالي ناعم',
      duration: '٥ أيام',
      serviceType: 'تفصيل كامل'
    }
  },
  {
    id: 'classic-abaya',
    title: 'عباءة كلاسيكية مطرزة يدوياً',
    category: 'Traditional',
    description: 'عباءة سوداء أنيقة بقماش منسدل وتفاصيل تطريز ناعمة بخيوط الحرير على الأكمام، تناسب الإطلالات اليومية والمناسبات.',
    longDescription: 'عباءة سوداء مصممة بقصّة مريحة وأكمام واسعة. تم إدخال خيوط حريرية وتطريزها يدوياً بدقة متناهية على أطراف الأكمام لتعطي مظهراً يجمع بين الفخامة والبساطة.',
    coverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800'],
    clientName: 'ريم خالد',
    date: 'أبريل ٢٠٢٦',
    specs: {
      fabric: 'حرير الكريب الأسود',
      duration: '٤ أيام',
      serviceType: 'تفصيل خاص'
    }
  },
  {
    id: 'moroccan-kaftan',
    title: 'قفطان ناعم للمناسبات',
    category: 'Traditional',
    description: 'قفطان شرقي تقليدي مصنوع من قماش الحرير المنسدل ومطرز بخيوط ذهبية ناعمة لإطلالة راقية في الأعياد والمناسبات.',
    longDescription: 'تصميم قفطان يجمع بين التراث والأناقة العصرية. مصنوع من الحرير الطبيعي الناعم ومزين بالسفيفة والخطوط الذهبية المطرزة يدوياً لضمان الراحة التامة والمظهر البهي.',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800'],
    clientName: 'فاطمة عمر',
    date: 'أبريل ٢٠٢٦',
    specs: {
      fabric: 'حرير طبيعي وجاكار',
      duration: '٦ أيام',
      serviceType: 'خياطة تراثية'
    }
  },
  {
    id: 'kids-dress',
    title: 'فستان أطفال من الدانتيل والقطن',
    category: 'Kids',
    description: 'فستان بناتي رقيق مدمج بالدانتيل الفاخر والقطن العضوي الناعم لراحة ابنتك في الأعياد وجلسات التصوير.',
    longDescription: 'صممت هذا الفستان مع التركيز على راحة الطفل. البطانة مصنوعة من القطن الصافي بنسبة ١٠٠٪ لتجنب حساسية الجلد، مع طبقة علوية من الدانتيل المشغول يدوياً بوردات ناعمة.',
    coverImage: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800'],
    clientName: 'أميرة يوسف',
    date: 'مارس ٢٠٢٦',
    specs: {
      fabric: 'قطن خالص ودانتيل فرنسي',
      duration: '٣ أيام',
      serviceType: 'ملابس أطفال مخصصة'
    }
  },
  {
    id: 'linen-blouse',
    title: 'قميص صيفي من الكتان الطبيعي',
    category: 'Women',
    description: 'بلوزة صيفية خفيفة وباردة مصنوعة من الكتان الطبيعي بتفاصيل أزرار خشبية وقصة فضفاضة مريحة.',
    longDescription: 'قطعة صيفية أساسية بامتياز، تفصيل يدوي واسع من الكتان الطبيعي المغسول مسبقاً لمنع الانكماش. تفاصيل يدوية ناعمة حول العنق والجيوب تمنح القميص طابع الصنع المنزلي الدافئ.',
    coverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800'],
    clientName: 'هند أحمد',
    date: 'مارس ٢٠٢٦',
    specs: {
      fabric: 'كتان بلجيكي طبيعي',
      duration: 'يومين',
      serviceType: 'خياطة يومية عصرية'
    }
  },
  {
    id: 'dress-alterations',
    title: 'تعديل وتطريز فستان زفاف عتيق',
    category: 'Custom',
    description: 'إعادة تصميم وتضييق فستان زفاف عائلي قديم ليتطابق مع مقاسات العروس الجديدة وتجديد التطريز التالف.',
    longDescription: 'من الأعمال المفضلة لقلبي، قمنا بإعادة بناء الصدر والأكتاف لفستان زفاف عتيق يعود لـ ٢٠ عاماً مضت، ليتناسب تماماً مع قوام العروس، مع تنظيف الدانتيل القديم وإضافة خرز لؤلؤي ناعم بلمسات يدوية.',
    coverImage: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800',
    images: ['https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800'],
    clientName: 'منى علي',
    date: 'فبراير ٢٠٢٦',
    specs: {
      fabric: 'حرير التفتا ودانتيل عتيق',
      duration: '٧ أيام',
      serviceType: 'تعديل وترميم'
    }
  }
];
