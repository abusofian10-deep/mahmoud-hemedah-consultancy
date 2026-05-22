export type Locale = 'en' | 'ar';

export const translations = {
  en: {
    meta: {
      brand: 'M. CONSULTING',
      brandFull: 'Executive Consulting',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      cases: 'Case Studies',
      contact: 'Contact',
      cta: 'Book Consultation',
    },
    hero: {
      eyebrow: 'Senior Management & Technology Consultant',
      title: 'Where executive judgment meets digital precision.',
      subtitle:
        'Seventeen years guiding companies, family enterprises, and institutions across Egypt and the Gulf — through governance, restructuring, and intelligent transformation.',
      ctaPrimary: 'Request a Consultation',
      ctaSecondary: 'Explore Services',
      stat1: { value: '17+', label: 'Years of executive practice' },
      stat2: { value: '2', label: 'MBAs — Europe & U.S.' },
      stat3: { value: 'EG · GCC', label: 'Regional expertise' },
    },
    about: {
      eyebrow: 'About',
      title: 'A mature executive for complex, high-stakes decisions.',
      lead:
        'Dual MBA holder from leading European and American business schools, with seventeen-plus years leading operating companies, family conglomerates, and institutional ventures across Egypt and the Sultanate of Oman.',
      body1:
        'My practice sits at the rare intersection of disciplined corporate governance and applied technology. I have negotiated with international agencies, restructured boards, navigated banking and investment relationships, and implemented enterprise systems — often within the same engagement.',
      body2:
        'I work with founders and executives who need a seasoned partner — not a slide deck. The outcome is always the same shape: a clearer operating model, defensible risk posture, and a leadership team that can execute.',
      pillarsTitle: 'How I work',
      pillars: [
        { title: 'Clarity before complexity', body: 'Reduce the problem to its real shape before recommending a path.' },
        { title: 'Governance as foundation', body: 'Sustainable performance is built on structure, not personalities.' },
        { title: 'Technology as leverage', body: 'ERP and AI are operating tools, not procurement items.' },
        { title: 'Discretion by default', body: 'Sensitive mandates handled with the confidentiality they deserve.' },
      ],
    },
    services: {
      eyebrow: 'Our Solutions',
      title: 'Two pillars. One executive perspective.',
      lead: 'Engagements are scoped around a defined business outcome and led personally from diagnosis through implementation.',
      pillarA: {
        tag: 'Pillar I',
        title: 'Management Consulting',
        items: [
          { title: 'Corporate Governance', body: 'Board design, charters, decision rights, and performance frameworks for owner-led and institutional structures.' },
          { title: 'Family Business Structuring', body: 'Succession, family councils, shareholder agreements, and the separation of family from enterprise.' },
          { title: 'Risk & Crisis Management', body: 'Enterprise risk mapping, scenario planning, and active leadership through restructuring and turnaround.' },
          { title: 'Financial & Banking Liaisons', body: 'Direct engagement with banks, investors, and international agencies on facilities, restructuring, and capital strategy.' },
        ],
      },
      pillarB: {
        tag: 'Pillar II',
        title: 'Digital Transformation',
        items: [
          { title: 'ERP Implementation', body: 'Selection, deployment, and post-go-live stabilisation — from process mapping to data governance.' },
          { title: 'AI Integration', body: 'Practical applications of generative AI and prompt engineering inside finance, operations, and management reporting.' },
          { title: 'Technology-Driven Optimisation', body: 'Workflow redesign that compounds — automating the routine so executives can focus on the consequential.' },
          { title: 'Business–IT Translation', body: 'Bridging executives and technical teams so technology decisions serve the strategy, not the vendor.' },
        ],
      },
    },
    cases: {
      eyebrow: 'Challenges Solved',
      title: 'Selected engagements.',
      lead: 'Identities withheld for confidentiality. Outcomes documented.',
      items: [
        {
          sector: 'Family Holding · GCC',
          title: 'Restructuring a 30-year family conglomerate',
          challenge: 'Overlapping ownership, unclear succession, and underperforming subsidiaries created governance paralysis.',
          outcome: 'Designed a holding structure with a family council, board charter, and divestment plan that restored decision velocity within nine months.',
        },
        {
          sector: 'Industrial Group · Egypt',
          title: 'Crisis management & bank renegotiation',
          challenge: 'Liquidity squeeze, breached covenants, and fractured relationships with three lending banks.',
          outcome: 'Led the workout: refreshed financial reporting, renegotiated terms with all lenders, and stabilised operations within two quarters.',
        },
        {
          sector: 'Services Group · Oman',
          title: 'ERP deployment across six entities',
          challenge: 'Six disconnected operating units with no consolidated view of margin, inventory, or cash.',
          outcome: 'Selected and implemented a unified ERP, established a shared chart of accounts, and reduced monthly close from 28 to 7 days.',
        },
        {
          sector: 'SME · Cross-border',
          title: 'AI-enabled finance & reporting workflow',
          challenge: 'Lean finance team drowning in manual reconciliation and ad-hoc reporting requests.',
          outcome: 'Deployed prompt-engineered AI assistants for variance analysis and narrative reporting, freeing 40% of the team\'s monthly capacity.',
        },
      ],
    },
    contact: {
      eyebrow: 'Consultation Request',
      title: 'Let\'s discuss your mandate.',
      lead: 'For founders, SME owners, and enterprise executives. Initial consultations are confidential and without obligation.',
      form: {
        name: 'Full name',
        email: 'Email',
        company: 'Company',
        role: 'Your role',
        message: 'Briefly describe the challenge',
        submit: 'Submit request',
        success: 'Thank you. Your request has been received — I will be in touch within two business days.',
        errorName: 'Please enter your name.',
        errorEmail: 'Please enter a valid email.',
        errorMessage: 'Please provide a short description.',
      },
      details: {
        location: 'Cairo · Muscat',
        availability: 'Engagements: Egypt & GCC',
        response: 'Reply within 2 business days',
      },
    },
    footer: {
      tagline: 'Strategic governance. Digital precision.',
      rights: 'All rights reserved.',
      sections: {
        navigate: 'Navigate',
        contact: 'Contact',
      },
    },
    cta: {
      ribbonTitle: 'Considering a complex transition?',
      ribbonBody: 'Restructuring, succession, ERP, or AI — start with a confidential conversation.',
      ribbonBtn: 'Request a Consultation',
    },
  },
  ar: {
    meta: {
      brand: 'م. للاستشارات',
      brandFull: 'الاستشارات التنفيذية',
    },
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      services: 'الخدمات',
      cases: 'دراسات الحالة',
      contact: 'تواصل',
      cta: 'احجز استشارة',
    },
    hero: {
      eyebrow: 'مستشار تنفيذي في الإدارة والتقنية',
      title: 'حيث تلتقي الحصافة التنفيذية بدقة التحول الرقمي.',
      subtitle:
        'سبعة عشر عامًا من قيادة الشركات والمؤسسات العائلية والكيانات المؤسسية في مصر والخليج — عبر الحوكمة وإعادة الهيكلة والتحول الذكي.',
      ctaPrimary: 'اطلب استشارة',
      ctaSecondary: 'استعرض الخدمات',
      stat1: { value: '+17', label: 'عامًا من الممارسة التنفيذية' },
      stat2: { value: '2', label: 'ماجستير إدارة أعمال — أوروبا والولايات المتحدة' },
      stat3: { value: 'مصر · الخليج', label: 'خبرة إقليمية موثقة' },
    },
    about: {
      eyebrow: 'نبذة',
      title: 'تنفيذي ناضج للقرارات المعقدة وعالية المخاطر.',
      lead:
        'حاصل على شهادتي ماجستير إدارة أعمال من كبرى الجامعات الأوروبية والأمريكية، وأمتلك أكثر من سبعة عشر عامًا من قيادة شركات تشغيلية ومجموعات عائلية ومشاريع مؤسسية في مصر وسلطنة عُمان.',
      body1:
        'تقع ممارستي عند التقاطع النادر بين الحوكمة المؤسسية المنضبطة والتقنية التطبيقية. تفاوضت مع وكالات دولية، وأعدت هيكلة مجالس إدارات، وأدرت علاقات بنكية واستثمارية، ونفّذت أنظمة مؤسسية — في كثير من الأحيان ضمن المهمة نفسها.',
      body2:
        'أعمل مع المؤسسين والتنفيذيين الذين يحتاجون إلى شريك خبير لا إلى عرض تقديمي. والنتيجة دائمًا بالشكل ذاته: نموذج تشغيلي أوضح، وموقف مخاطر قابل للدفاع، وفريق قيادي قادر على التنفيذ.',
      pillarsTitle: 'منهجي في العمل',
      pillars: [
        { title: 'الوضوح قبل التعقيد', body: 'أُعيد المشكلة إلى شكلها الحقيقي قبل اقتراح أي مسار.' },
        { title: 'الحوكمة كأساس', body: 'الأداء المستدام يُبنى على الهيكل، لا على الأشخاص.' },
        { title: 'التقنية كرافعة', body: 'أنظمة ERP والذكاء الاصطناعي أدوات تشغيل، لا بنود شراء.' },
        { title: 'السرية افتراضيًا', body: 'المهام الحساسة تُدار بما تستحقه من تحفظ مهني.' },
      ],
    },
    services: {
      eyebrow: 'حلولنا',
      title: 'ركيزتان. ومنظور تنفيذي واحد.',
      lead: 'تُحدد المهمات حول نتيجة عمل واضحة، وتُقاد شخصيًا من التشخيص حتى التنفيذ.',
      pillarA: {
        tag: 'الركيزة الأولى',
        title: 'الاستشارات الإدارية',
        items: [
          { title: 'الحوكمة المؤسسية', body: 'تصميم مجالس الإدارة، واللوائح، وحقوق القرار، وأُطر الأداء للهياكل المملوكة فرديًا والمؤسسية.' },
          { title: 'هيكلة الشركات العائلية', body: 'التعاقب، والمجالس العائلية، واتفاقيات المساهمين، والفصل بين الأسرة والمؤسسة.' },
          { title: 'إدارة المخاطر والأزمات', body: 'تخطيط المخاطر المؤسسية، وسيناريوهات الطوارئ، والقيادة الفعّالة خلال إعادة الهيكلة والتحول.' },
          { title: 'العلاقات المالية والمصرفية', body: 'تواصل مباشر مع البنوك والمستثمرين والوكالات الدولية حول التسهيلات وإعادة الهيكلة وإستراتيجية رأس المال.' },
        ],
      },
      pillarB: {
        tag: 'الركيزة الثانية',
        title: 'التحول الرقمي',
        items: [
          { title: 'تطبيق أنظمة ERP', body: 'الاختيار والتنفيذ والاستقرار بعد الإطلاق — من رسم العمليات إلى حوكمة البيانات.' },
          { title: 'دمج الذكاء الاصطناعي', body: 'تطبيقات عملية للذكاء الاصطناعي وهندسة الأوامر في المالية والعمليات وتقارير الإدارة.' },
          { title: 'تحسين قائم على التقنية', body: 'إعادة تصميم سير العمل لأتمتة الروتين وتحرير القيادة للقرارات المؤثرة.' },
          { title: 'الترجمة بين الأعمال والتقنية', body: 'جسر بين التنفيذيين والفرق التقنية لتخدم القرارات التقنية الإستراتيجية لا المورّد.' },
        ],
      },
    },
    cases: {
      eyebrow: 'تحديات تم حلها',
      title: 'مهام مختارة.',
      lead: 'الهويات محفوظة للسرية، والنتائج موثقة.',
      items: [
        {
          sector: 'مجموعة عائلية · الخليج',
          title: 'إعادة هيكلة مجموعة عائلية عمرها 30 عامًا',
          challenge: 'تداخل في الملكية، وعدم وضوح في التعاقب، وأداء ضعيف لشركات تابعة أدّى إلى شلل في الحوكمة.',
          outcome: 'صممنا هيكلًا قابضًا مع مجلس عائلي وميثاق إدارة وخطة تخارج أعادت سرعة القرار خلال تسعة أشهر.',
        },
        {
          sector: 'مجموعة صناعية · مصر',
          title: 'إدارة أزمة وإعادة تفاوض بنكي',
          challenge: 'ضغط سيولة، وإخلال بالشروط، وعلاقات مرتبكة مع ثلاثة بنوك مقرضة.',
          outcome: 'قُدنا الحل: تقارير مالية محدّثة، وإعادة تفاوض مع كل المقرضين، واستقرار العمليات خلال ربعين.',
        },
        {
          sector: 'مجموعة خدمات · عُمان',
          title: 'تطبيق ERP عبر ست كيانات',
          challenge: 'ست وحدات تشغيلية منفصلة دون رؤية موحدة للهامش أو المخزون أو النقد.',
          outcome: 'اخترنا ونفّذنا نظام ERP موحدًا، وأنشأنا دليل حسابات مشتركًا، وقلّصنا الإقفال الشهري من 28 إلى 7 أيام.',
        },
        {
          sector: 'منشأة متوسطة · عابرة للحدود',
          title: 'سير عمل مالي مدعوم بالذكاء الاصطناعي',
          challenge: 'فريق مالي صغير غارق في تسويات يدوية وطلبات تقارير متكررة.',
          outcome: 'نشرنا مساعدين بالذكاء الاصطناعي لتحليل الانحرافات والتقارير السردية، محرّرين 40% من طاقة الفريق الشهرية.',
        },
      ],
    },
    contact: {
      eyebrow: 'طلب استشارة',
      title: 'لنناقش مهمتك.',
      lead: 'للمؤسسين، وأصحاب المنشآت المتوسطة، والتنفيذيين. الاستشارات الأولية سرية ودون التزام.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'الشركة',
        role: 'منصبك',
        message: 'صف التحدي باختصار',
        submit: 'إرسال الطلب',
        success: 'شكرًا لك. تم استلام طلبك، وسأتواصل معك خلال يومَي عمل.',
        errorName: 'يرجى إدخال الاسم.',
        errorEmail: 'يرجى إدخال بريد إلكتروني صالح.',
        errorMessage: 'يرجى تقديم وصف موجز.',
      },
      details: {
        location: 'القاهرة · مسقط',
        availability: 'المهام: مصر والخليج',
        response: 'الرد خلال يومَي عمل',
      },
    },
    footer: {
      tagline: 'حوكمة إستراتيجية. ودقة رقمية.',
      rights: 'جميع الحقوق محفوظة.',
      sections: {
        navigate: 'تصفّح',
        contact: 'تواصل',
      },
    },
    cta: {
      ribbonTitle: 'تفكر في تحول معقد؟',
      ribbonBody: 'إعادة هيكلة، أو تعاقب، أو ERP، أو ذكاء اصطناعي — ابدأ بمحادثة سرية.',
      ribbonBtn: 'اطلب استشارة',
    },
  },
} as const;

export type Dict = typeof translations.en;
