export const categories = [
  { id: 'mysteries',    label: 'Mysteries',    labelAr: 'أسرار وغوامض', icon: '◈', description: 'Cases that defy explanation. Disappearances, anomalies, and events that logic cannot contain.', descriptionAr: 'قضايا حاربت العقل. اختفاءات وظواهر مجهولة لا يستوعبها المنطق.' },
  { id: 'true-crime',   label: 'True Crime',   labelAr: 'جرائم واقعية', icon: '⊕', description: 'Real accounts of darkness. Stories that should not exist, yet do.', descriptionAr: 'سجلات حقيقية من الظلام. قصص وحوادث أبشع من الخيال وقعت بالفعل.' },
  { id: 'dark-theories',label: 'Dark Theories', labelAr: 'نظريات مظلمة', icon: '◉', description: 'Ideas that governments buried. Patterns hidden in plain sight.', descriptionAr: 'أسرار دفنتها الحكومات. أنماط وتجارب سرية مكشوفة في العلن.' },
  { id: 'supernatural', label: 'Supernatural', labelAr: 'ظواهر خارقة', icon: '◎', description: 'Encounters beyond our understanding. What happens when the veil thins.', descriptionAr: 'مواجهات تتجاوز الفهم البشري. ماذا يحدث عندما تنهار الحدود بين العوالم.' },
];

export const stories = [

  /* ═══════════════════════════════════════
     1. DYATLOV PASS
  ═══════════════════════════════════════ */
  {
    id: 'dyatlov-pass-incident',
    title: 'The Dyatlov Pass Incident',
    titleAr: 'حادثة ممر دياتلوف الشيطانية: سر الجثث التسع في جبال الأورال',
    subtitle: 'Nine hikers. An unexplained terror in the night. No survivors.',
    subtitleAr: 'تسعة متزلجين محترفين.. رعب مجهول في ظلام الليل المنسي.. ولا يوجد ناجٍ واحد.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: 'February 2, 1959',
    readTime: '10 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=80',
    seoKeywordsEn: 'Dyatlov Pass incident mystery, Kholat Syakhl, Soviet hiker deaths 1959, unexplained radiation, unsolved cold case',
    seoKeywordsAr: 'حادثة ممر دياتلوف, لغز جبال الأورال, الجثث التسع, قضايا لم تحل, رعب جبل الموت, ظواهر غامضة, روسيا 1959',
    excerpt: 'In February 1959, nine experienced Soviet hikers died under circumstances investigators could only describe as "an unknown compelling force." Their tent was slashed open from the inside. They fled barefoot into minus-30 temperatures.',
    excerptAr: 'في فبراير 1959، لقي تسعة من هواة التزلج السوفيت حتفهم في ظروف صدمت المحققين ووُصفت بـ "قوة قاهرة مجهولة". تم تمزيق خيمتهم من الداخل بالمقاطع، وهربوا حفاة الأقدام في صقير درجة حرارة -30 مئوية!',
    content: [
      'The Ural Mountains in February are indifferent to human survival. Igor Dyatlov knew this. His team of nine — graduates of the Ural Polytechnical Institute, experienced skiers — had conquered difficult terrain before. They were not reckless. They were not afraid.',
      'What the search party found on the slope of Kholat Syakhl — Dead Mountain, in the language of the indigenous Mansi people — shattered every assumption about what a mountain could do to people.',
      'The tent had been slashed from the inside. Not unzipped, not torn by wind. Cut open, deliberately, from within. The hikers had burst out into the freezing darkness in their socks. Some were barefoot. The temperature was minus thirty degrees Celsius.',
      'Six died of hypothermia. Their footprints led in a calm, orderly line away from the tent toward the treeline — as if they were walking away from something rather than running. Whatever they saw, it did not make them panic. It made them leave.',
      'The other three bodies were not found until May, buried under four meters of snow. These three told a different story. Nicolai Thibeaux-Brignolles had a fractured skull. Lyudmila Dubinina and Semyon Zolotaryov had catastrophic chest injuries — crushed ribs, fractured sternums — that a forensic expert compared to the force of a car accident. Neither had external wounds. Dubinina was missing her tongue and eyes.',
      'The clothing of several hikers was found to be radioactive. Photographs from the group\'s own cameras showed unidentified orange spheres in the night sky. The Soviet government classified the investigation. The official conclusion, when it came, read simply: "a spontaneous unknown force."',
      'Russia reopened the case in 2019 and announced an avalanche. Physicists, mountaineers, and the surviving families disputed this. The tent\'s position, the footprints, the injuries, the radiation — none of it fits a snow slide. Sixty-five years later, Dead Mountain keeps its secret.',
    ],
    contentAr: [
      'جبال الأورال في شهر فبراير لا ترحم أي كائن حي. كان إيغور دياتلوف يعرف ذلك جيداً. فريقه المكون من تسعة متزلجين محترفين من معهد الأورال للمقاييس لم يكونوا هواة، بل خبراء ذوي تجارب قاسية في أعتى الظروف الجوية.',
      'لكن ما وجدته فرق الإنقاذ في وقت لاحق على سفوح جبل "خولات سياخل" — والذي يعني بلغة شعب المانسي المحلي "جبل الموتى" — نسَف كل المنطق العلمي والطب الشرعي المعروف للوفاة بسبب البرد.',
      'كانت الخيمة مفرغة من الداخل ومزقة بآلة حادة من السطح الداخلي وليس الخارجي! لم يُفتح السحاب، بل قطعت قماش الخيمة بفزع من الداخل ليركضوا حفاة الأقدام وبملابسهم الداخلية في عتمة الثلج الصارم وتحت درجة حرارة 30 تحت الصفر.',
      'ستة من المتزلجين ماتوا بسبب التجمد، لكن آثار أقدامهم في الثلج أظهرت أنهم كانوا يمشون بخطوات متزنة ومتقاربة باتجاه الأشجار — وكأنهم يبتعدون عن شيء يرونه بوضوح دون رعب عشوائي، بل باستسلام غريب!',
      'أما الجثث الثلاث المتبقية، فلم يتم العثور عليها إلا في شهر مايو تحت عمق أربعة أمتار من الثلج. وكانت تحمل إصابات مرعبة: جمجمة مكسورة، وأضلع صدرية مهشمة تماماً تماثل قوة حادث سيارة مباشر دون وجود أي كدمات خارجية على الجلد! كما كانت "لودميلا دوبينينا" مفقودة اللسان والعينين بشكل كامل.',
      'الغريب أيضاً أن ملابس الضحايا أظهرت مستويات عالية من الإشعاع النبضي، وآخر صور في كاميراتهم أظهرت كرات كروية برتقالية توهجت في السماء! أغلقت السلطات السوفيتية الملف وكتبت في التقرير الرسمي: "سبب الوفاة قوة طارئة مجهولة لا يمكن السيطرة عليها".',
      'حتى يومنا هذا، وبعد مرور أكثر من 65 عاماً، يظل لغز حادثة دياتلوف رمزاً للرعب الشديد والمجهول الذي يكتنف جبال الأورال.'
    ],
    videoId: null,
    relatedIds: ['vanishing-of-flight-19', 'sodder-children', 'hinterkaifeck-murders'],
  },

  /* ═══════════════════════════════════════
     2. FLIGHT 19
  ═══════════════════════════════════════ */
  {
    id: 'vanishing-of-flight-19',
    title: 'The Vanishing of Flight 19',
    titleAr: 'اختفاء الرحلة 19: لغز قاذفات المحيط التي ابتلعها مثلث برمودا',
    subtitle: 'Five torpedo bombers. Fourteen men. No wreckage ever found.',
    subtitleAr: 'خمس قاذفات قنابل بحرية.. 14 طياراً.. واختفاء مطلق دون أثر لحطام أو جثث.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: 'December 5, 1945',
    readTime: '8 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&q=80',
    seoKeywordsEn: 'Flight 19 Bermuda Triangle disappearance, TBF Avenger bombers, Charles Taylor radio transmissions, ocean mysteries',
    seoKeywordsAr: 'الرحلة 19, اختفاء مثلث برمودا, الطائرات المفقودة, أسرار المحيط الأطلسي, لغز قاذفات القنابل السوفيتية والبريطانية',
    excerpt: 'On a cloudless afternoon over the Atlantic, five Navy bombers vanished during a routine training flight. Their final radio transmissions described compasses spinning uselessly and the sea turned white.',
    excerptAr: 'في بعد ظهر يوم صافٍ فوق المحيط الأطلسي، اختفت خمس قاذفات قنابل تابعة للبحرية الأمريكية أثناء تدريب روتيني. وصفت الإشارات اللاسلكية الأخيرة البوصلات وهي تدور بجنون والبحر الذي تحول للون الأبيض!',
    content: [
      'December 5, 1945. Fort Lauderdale Naval Air Station, Florida. Five TBF Avenger torpedo bombers — Flight 19 — lift off at 2:10 PM for a standard triangular navigation exercise. Clear skies. Experienced crew. Expected return: 5:23 PM.',
      'At 3:40 PM, Lieutenant Charles Taylor\'s voice breaks through the static with something that does not belong in a routine training report: "We have just passed over a small island. No other land in sight."',
      'The controller who answered him heard increasing confusion over the next two hours. Taylor\'s compass was malfunctioning. He wasn\'t certain of his position. Then, more disturbing: "Everything looks strange, even the ocean." And later, from one of the other pilots: "We can\'t find west. Everything is wrong."',
      'Taylor\'s last confirmed transmission: "All planes close up tight. We\'ll fly north until we hit the beach or run out of gas." After that, silence.',
      'A Martin Mariner flying boat carrying thirteen men was dispatched to search. Twenty-three minutes after takeoff, it too vanished. A surface vessel in the area reported seeing an explosion in the sky — but no debris was ever recovered.',
      'The U.S. Navy searched 250,000 square miles of ocean. Nothing. Not a life jacket, not an oil slick, not a single body. The official report attributed the loss to "causes or reasons unknown."',
    ],
    contentAr: [
      '5 ديسمبر 1945. قاعدة فورت لودرديل الجوية بقاعدة فلوريدا البحرية. انطلقت 5 طائرات قاذفة من طراز TBF Avenger — المعروفة بالرحلة 19 — في مهمة تدريبية روتينية. كان الجو صافياً والخبرة ممتازة.',
      'في الساعة 3:40 مساءً، اخترق صوت الملازم شارل تايلور أجهزة اللاسلكي بجملة غريبة: "البوصلات لا تعمل! لا يمكننا تحديد الشمال، حتى شكل المحيط يبدو غريباً وغير مألوف!"',
      'واستمرت الرداءة والتداخل عبر اللاسلكي لساعتين، حيث سمع برج المراقبة أحد الطيارين يقول: "نحن ندور في مكاننا.. الشاطئ ليس في مكانه والشمس تظهر في الاتجاه الخاطئ!"',
      'كانت الرسالة الأخيرة الصادرة عن تايلور: "عندما ينتهي الوقود سنجبر على الهبوط في الماء سوية.."، وبعدها ساد الصمت التام.',
      'أرسلت البحرية طائرة إنقاذ ضخمة من طراز Martin Mariner تحمل 13 طياراً للبحث عنهم. وبعد 23 دقيقة فقط من إقلاعها.. اختفت طائرة الإنقاذ هي الأخرى كأنها لم تكن!',
      'فتشت البحرية الأمريكية مساحة 250 ألف ميل مربع في المحيط دون العثور على بقعة زيت واحدة، ولا سترة نجاة، ولا جزء صغير من الحطام! وظلت هذه الحادثة هي الشرارة الكبرى التي أطلقت أسطورة "مثلث برمودا".'
    ],
    videoId: null,
    relatedIds: ['dyatlov-pass-incident', 'sodder-children', 'db-cooper-hijacking'],
  },

  /* ═══════════════════════════════════════
     3. HINTERKAIFECK
  ═══════════════════════════════════════ */
  {
    id: 'hinterkaifeck-murders',
    title: 'The Hinterkaifeck Murders',
    titleAr: 'مجزرة مزرعة هينتركايفيك: الجاني الذي عاش مع الجثث أياماً',
    subtitle: 'A farmstead in Bavaria. Six dead. The killer lived there for days.',
    subtitleAr: 'مزرعة معزولة في بافاريا.. 6 قتلى.. والقاتل المجهول عاش في المنزل أياماً بعد الجريمة!',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: 'March 31, 1922',
    readTime: '9 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
    seoKeywordsEn: 'Hinterkaifeck murders mystery, Bavaria cold case 1922, Gruber family unsolved crime, horror true crime',
    seoKeywordsAr: 'جريمة هينتركايفيك, جرائم غامضة, القاتل المجهول, قضايا لم تحل, رعب المزارع, ألمانيا 1922',
    excerpt: 'Weeks before the murders, the farmer told neighbors about footsteps in the attic and tracks in the snow leading to the farm — with none leading back. Six people were killed. The killer stayed for days.',
    excerptAr: 'قبل أسابيع من الجريمة، حكى المزارع للجيران عن أقدام في الثلج قادمة من الغابة للمزرعة دون أثر للعودة! قُتل 6 أشخاص، وعاش القاتل في منزلهم بعد ذبحهم أياماً يتناول طعامهم ويرعى الماشية!',
    content: [
      'The Hinterkaifeck farm was six miles from the nearest town of Schrobenhausen in rural Bavaria. In March 1922, it housed Andreas Gruber, 63; his wife Cäzilia, 72; their widowed daughter Viktoria, 35; her children Cäzilia, 7, and Josef, 2; and the newly hired maid Maria Baumgartner.',
      'In the days preceding the murders, Andreas Gruber found footprints in the snow leading to the farm from the forest — but none leading away. He found a strange newspaper and heard footsteps in the attic. He did not call police.',
      'On April 4th, 1922, neighbors investigated the silent farm. They found the animals alive and fed. Smoke had been rising from the chimney for days. Someone had been living there.',
      'The bodies were in the barn: Andreas, Cäzilia senior, Viktoria, and seven-year-old Cäzilia, killed one by one with a mattock. Young Josef and the maid were found in the house. The killer had stayed in the house, feeding the cattle and eating the family\'s food for days after the massacre.',
    ],
    contentAr: [
      'تقع مزرعة هينتركايفيك المعزولة على بعد 6 أميال من أقرب بلدة في بافاريا بـ ألمانيا. في مارس 1922، كانت تعيش فيها عائلة أندرياس غروبر المكونة من 6 أفراد مع الخادمة الجديدة التي وصلت في يوم الجريمة نفسه!',
      'قبل يومين من الجريمة، لاحظ الأب آثار أقدام غريبة في الثلج تحيط بالمزرعة قادمة من الغابة العميق.. لكن بدون أي أثر لخطوات تعود للغابة! كما سمع أصوات خطوات فوق العلية وجد جريدة غريبة لم يشترها أحد.',
      'بعد أيام من اختفاء العائلة، توجه الجيران للمزرعة للتحقق. وجدوا الدخان يخرج من المداخن، والماشية محتلبة والمطعم متناولاً منه! كان القاتل يقيم بالمنزل ويعيش حياته الطبيعية بجوار الجثث الملقاة في الحظيرة والبيت لمدة 3 أيام كاملة!',
      'قُتل جميع الأفراد بمن فيهم الطفل ذو العامين بآلة حفر زراعية حادة. تم استجواب أكثر من 100 مشتبه به، واستُخدمت تقنيات الـ DNA الحديثة عام 2019 دون التوصل إلى تحديد هوية الفاعل.'
    ],
    videoId: null,
    relatedIds: ['sodder-children', 'zodiac-killer', 'black-dahlia-murder'],
  },

  /* ═══════════════════════════════════════
     4. SODDER CHILDREN
  ═══════════════════════════════════════ */
  {
    id: 'sodder-children',
    title: 'The Sodder Children',
    titleAr: 'اختفاء أطفال سودر: حريق ليلة الميلاد وبقايا لم توجد أبداً',
    subtitle: 'Five children vanished in a Christmas Eve fire. No remains were ever found.',
    subtitleAr: '5 أطفال تبخروا في حريق منزل في ليلة الميلاد.. لم يُعثر على بقايا عظام أو أثر لجثثهم!',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: 'December 24, 1945',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=900&q=80',
    seoKeywordsEn: 'Sodder children disappearance, West Virginia house fire 1945, missing kids mystery, cold case',
    seoKeywordsAr: 'أطفال سودر, اختفاء غامض, حريق ليلة الميلاد 1945, قضايا أطفال مفقودين, ألغاز غير محلولة',
    excerpt: 'The Sodder house in West Virginia burned on Christmas Eve, 1945. George and Jennie escaped with four of their ten children. The other five were never found — not in the ashes, not anywhere.',
    excerptAr: 'احترق منزل عائلة سودر في ليلة الميلاد 1945. نجا الأب والأم مع 4 من أطفالهم، بينما تبخر الأطفال الـ 5 الآخرون من داخل المنزل ودون وجود أي عظام في رماد الحريق!',
    content: [
      'George and Jennie Sodder escaped their burning West Virginia house on Christmas Eve, 1945, with four children. Five children remained inside. Yet when the fire cooled, not a single bone fragment was found.',
      'The phone line had been cleanly cut, not burned. The family trucks would not start. A suspicious man had been seen watching the house days prior.',
      'In 1967, Jennie received a mystery photograph postmarked from Florida showing a young man resembling her lost son Louis. The case remains one of America\'s most heartbreaking unresolved mysteries.',
    ],
    contentAr: [
      'في ليلة عيد الميلاد عام 1945، اندلع حريق مفاجئ في منزل عائلة سودر بولاية فرجينيا الغربية. استطاع جورج وجيني النجاة مع 4 من أطفالهم، بينما حوصر 5 أطفال في الطابق العلوي.',
      'غريب الأمر أن خط الهاتف وُجد مقطوعاً بآلة حادة، وشاحنات العائلة تعطّلت فجأة عن العمل لمنع إنقاذهم! وعندما انطفأ الحريق بالكامل، أظهر الفحص الفني عدم وجود أي عظام أو بقايا بشرية في الرماد على الإطلاق، وهو أمر مستحيل علمياً في حرائق المنازل التقليدية.',
      'في عام 1967، تلقت الأم مظروفاً يحتوي على صورة شاب في العشرينات يحمل ملامح ابنها المفقود لويس مع رسالة غامضة من فلوريدا، ليبقى السؤال: هل احترق الأطفال أم تم اختطافهم قبل إضرام النار؟'
    ],
    videoId: null,
    relatedIds: ['hinterkaifeck-murders', 'dyatlov-pass-incident', 'vanishing-of-flight-19'],
  },

  /* ═══════════════════════════════════════
     5. ZODIAC KILLER
  ═══════════════════════════════════════ */
  {
    id: 'zodiac-killer',
    title: 'The Zodiac Killer',
    titleAr: 'سفاح الزودياك: القاتل الذي روع كاليفورنيا بشفرات لم تُحل لـ 50 عاماً',
    subtitle: 'He mailed encrypted ciphers to newspapers. One went unsolved for 51 years.',
    subtitleAr: 'سفاح أرسل شفرات معقدة للصحف.. وظل لغزه غير مفكوك لأكثر من نصف قرن!',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: '1968–1969',
    readTime: '11 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=900&q=80',
    seoKeywordsEn: 'Zodiac Killer ciphers, San Francisco murders, Z340 solved cipher, serial killer mystery',
    seoKeywordsAr: 'سفاح الزودياك, شفرات الزودياك, جرائم كاليفورنيا, أشهر القتلة المتسلسلين, قضايا لم تحل',
    excerpt: 'Between 1968 and 1969, a killer in Northern California murdered at least five people and claimed 37. He sent taunting encrypted ciphers to newspapers and was never caught.',
    excerptAr: 'بين عامي 1968 و 1969، روع سفاح الزودياك ولاية كاليفورنيا بجرائم قتل وسخرية من الشرطة عبر رسائل وشفرات مشفرة لم يستطع أحد حلها لخمسين عاماً!',
    content: [
      'The Zodiac killer operated in Northern California, targeting young couples and cab drivers, leaving taunting letters to the press written in complex cryptographic symbols.',
      'In December 2020, an international team of amateur codebreakers finally cracked his famous "Z340" cipher after 51 years. Yet his true identity remains unconfirmed.',
    ],
    contentAr: [
      'يُعد سفاح الزودياك أحد أكثر القتلة المتسلسلين غموضاً في التاريخ الأمريكي. استهدف الضحايا في كاليفورنيا وكان يتصل بالشرطة بنفسه بعد الجريمة للإبلاغ عنها والسخرية منهم.',
      'أرسل عدة شفرات غامضة للصحف مهدداً بقتل المزيد إذا لم تُنشر على الصفحات الأولى. وفي عام 2020 نجح فريق دولي في حل شفرة Z340 الشهيرة بعد 51 عاماً من المحاولات المعقدة!'
    ],
    videoId: null,
    relatedIds: ['black-dahlia-murder', 'hinterkaifeck-murders', 'jack-the-ripper'],
  },

  /* ═══════════════════════════════════════
     6. BLACK DAHLIA
  ═══════════════════════════════════════ */
  {
    id: 'black-dahlia-murder',
    title: 'The Black Dahlia',
    titleAr: 'قضية داليا السوداء: أبشع جريمة غير محلولة في تاريخ هوليوود',
    subtitle: 'The most infamous unsolved murder in American history.',
    subtitleAr: 'مقتل إليزابيث شورت والتمثيل بجثتها في لوس أنجلوس عام 1947.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: 'January 15, 1947',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    seoKeywordsEn: 'Black Dahlia Elizabeth Short murder, Los Angeles 1947 cold case, unsolved Hollywood crime',
    seoKeywordsAr: 'داليا السوداء, إليزابيث شورت, جرائم هوليوود, أبشع الجرائم الواقعية, قضايا لم تحل',
    excerpt: 'Elizabeth Short\'s body was found bisected at the waist with surgical precision in Los Angeles. The killer sent her belongings to newspapers. The case was never solved.',
    excerptAr: 'عُثر على جثة إليزابيث شورت مقطوعة إلى نصفين بدقة جراحية في لوس أنجلوس عام 1947. أرسل القاتل متعلقاتها للصحف ولم يُقبض عليه أبداً!',
    content: [
      'On January 15, 1947, the mutilated body of 22-year-old Elizabeth Short was discovered in a vacant lot in Los Angeles. Drained of blood and cut completely in half, the case horrified the nation.',
      'The killer mailed her personal address book and items directly to the Los Angeles Examiner, scrubbed with gasoline. Hundreds of suspects were questioned, but no one was ever charged.',
    ],
    contentAr: [
      'في 15 يناير 1947، عُثر على جثة الفتاة إليزابيث شورت البالغة من العمر 22 عاماً في قطعة أرض خالية بلوس أنجلوس. كانت الجثة مفرغة تماماً من الدماء ومقسومة لنصفين بدقة جراحية مذهلة.',
      'قام القاتل بإرسال حقيبة متعلقاتها الشخصية وصورها للصحافة مغسولة بالبنزين لمحو البصمات، وظلت هذه القضية اللغز الأكبر في تاريخ شرطة لوس أنجلوس.'
    ],
    videoId: null,
    relatedIds: ['zodiac-killer', 'jack-the-ripper', 'hinterkaifeck-murders'],
  },

  /* ═══════════════════════════════════════
     7. JACK THE RIPPER
  ═══════════════════════════════════════ */
  {
    id: 'jack-the-ripper',
    title: 'Jack the Ripper',
    titleAr: 'جاك السفاح: سفاح ضباب لندن الذي حير البشرية لـ 135 عاماً',
    subtitle: 'Victorian London\'s most terrifying killer — and the world\'s first true cold case.',
    subtitleAr: 'قاتل حي وايت تشابل المتسلسل لعام 1888 وأول قضية رعب إعلامية في التاريخ.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: 'August–November 1888',
    readTime: '12 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80',
    seoKeywordsEn: 'Jack the Ripper Whitechapel murders 1888, London unsolved serial killer, Dear Boss letter',
    seoKeywordsAr: 'جاك السفاح, جرائم وايت تشابل, لندن 1888, قضايا لم تحل, أشهر قتلة التاريخ',
    excerpt: 'In the autumn of 1888, a killer stalked Whitechapel, London. Five women were murdered with surgical precision. The killer was never identified.',
    excerptAr: 'في خريف عام 1888، روع قاتل مجهول حي وايت تشابل بـ لندن وقتل 5 نساء بدقة جراحية وسخر من الشرطة برتويج اسم "جاك السفاح"!',
    content: [
      'In the fog-choked streets of Victorian Whitechapel, five women were brutally killed by an unidentified assailant possessing intricate anatomical knowledge.',
      'Letters signed "Jack the Ripper" were delivered to police and news agencies. Despite thousands of interviews and theories spanning royalty to doctors, his identity remains shrouded in fog.',
    ],
    contentAr: [
      'بين أزقة لندن المظلمة والمغطاة بالضباب عام 1888، ارتكب قاتل مجهول 5 جرائم قتل مروعة لنساء بأسلوب جراحي متقدم للغاية يدل على معرفة واسعة بالتشريح.',
      'أرسل رسالته الشهيرة "عزيزي الرئيس" المكتوبة بالحبر الأحمر وسخر فيها من عجز الشرطة، ليصبح جاك السفاح أشهر أسطورة رعب في التاريخ.'
    ],
    videoId: null,
    relatedIds: ['zodiac-killer', 'black-dahlia-murder', 'hinterkaifeck-murders'],
  },

  /* ═══════════════════════════════════════
     8. DB COOPER
  ═══════════════════════════════════════ */
  {
    id: 'db-cooper-hijacking',
    title: 'D.B. Cooper — The Man Who Vanished from the Sky',
    titleAr: 'دي بي كوبر: الرجل الذي اختطف طائرة وتبخر في سماء العاصفة',
    subtitle: 'He hijacked a plane, collected $200,000 in ransom, and jumped into a storm.',
    subtitleAr: 'اختطف طائرة وركابها، حصل على فدية 200,000 دولار، وقفز بالمظلة في الظلام ولم يُعثر عليه أبداً!',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: 'November 24, 1971',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
    seoKeywordsEn: 'DB Cooper hijacking 1971, Northwest Orient Flight 305, parachuted ransom flight mystery',
    seoKeywordsAr: 'دي بي كوبر, اختطاف الطائرات, أسرار الطيران, أمريكا 1971, ألغاز غير محلولة',
    excerpt: 'In 1971, a man named Dan Cooper hijacked a Boeing 727, received $200,000 in cash, and parachuted into a freezing Northwest storm, vanishing forever.',
    excerptAr: 'في عام 1971، اختطف رجل يدعى دان كوبر طائرة بوينج 727 واستلم فدية 200 ألف دولار وقفز بمظلة في ليلة عاصفة ومظلمة دون أن يترك أي أثر!',
    content: [
      'On Thanksgiving Eve 1971, Dan Cooper claimed to have a bomb on Boeing 727 flight, demanding $200,000 and four parachutes in Seattle.',
      'After releasing passengers, he ordered the plane to fly toward Mexico and leaped into a 200 mph rainstorm over the Washington mountains. The FBI investigated for 45 years without finding his body or identity.',
    ],
    contentAr: [
      'في ليلة عيد الشكر عام 1971، اشترى رجل يرتدي بدلة أنيقة تذكرة طائرة تحت اسم دان كوبر، ثم هدد المضيفة بقنبلة وطالب بفدية 200 ألف دولار و4 مظلات.',
      'بعد إطلاق سراح الركب وأخذ الفدية، أمر القبطان بالطيران بارتفاع منخفض، وقفز من السلم الخلفي للطائرة في منتصف العاصفة ولم يُعثر عليه أو على المال حتى اليوم!'
    ],
    videoId: null,
    relatedIds: ['vanishing-of-flight-19', 'dyatlov-pass-incident', 'zodiac-killer'],
  },

  /* ═══════════════════════════════════════
     9. MOTHMAN
  ═══════════════════════════════════════ */
  {
    id: 'mothman-prophecy',
    title: 'The Mothman of Point Pleasant',
    titleAr: 'رجل الفراشة (مواثمان): الكائن الأسطوري وكارثة إنهيار الجسر',
    subtitle: 'For 13 months, residents reported a winged creature. Then the Silver Bridge collapsed.',
    subtitleAr: 'شاهد مئات السكان مخلوقاً مجنحاً بعينين حمراوتين توهجتا قبل انهيار جسر سيلفر وفقدان 46 شخصاً.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    categoryLabelAr: 'ظواهر خارقة',
    date: '1966–1967',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509470475192-4516873b4f00?w=900&q=80',
    seoKeywordsEn: 'Mothman Point Pleasant West Virginia, Silver Bridge collapse 1967, winged cryptid mystery',
    seoKeywordsAr: 'رجل الفراشة, موثمان, ظواهر خارقة, جسر سيلفر, أسرار تيكسوكاس, ظواهر غامضة',
    excerpt: 'Over 100 residents in Point Pleasant reported seeing a winged humanoid with glowing red eyes. Shortly after, the Silver Bridge collapsed, killing 46 people.',
    excerptAr: 'أبلغ أكثر من 100 شخص ببلدة بوينت بلازانت عن مشاهدة كائن مجنح عينيه تشعان حمراء، وبعد ذلك انهار الجسر وقتل 46 شخصاً واختفى الكائن!',
    content: [
      'Between 1966 and 1967 in Point Pleasant, West Virginia, over 100 witnesses reported encounters with a 7-foot winged entity with glowing red eyes.',
      'On December 15, 1967, the Silver Bridge collapsed, taking 46 lives. Immediately following the disaster, Mothman sightings ceased completely.',
    ],
    contentAr: [
      'شهدت مدينة بوينت بلازانت عام 1966 شهادات متطابقة لمئات السكان عن كائن رمادي بشري الشكل بأجنحة عريضة وعينين حمراوتين متوهجتين.',
      'في 15 ديسمبر 1967، انهار جسر سيلفر المفاجئ وغرق 46 شخصاً، واختفت مشاهدات هذا المخلوق تماماً بعد الكارثة!'
    ],
    videoId: null,
    relatedIds: ['voices-from-the-static', 'simulation-theorem', 'dyatlov-pass-incident'],
  },

  /* ═══════════════════════════════════════
     10. EVP / VOICES FROM STATIC
  ═══════════════════════════════════════ */
  {
    id: 'voices-from-the-static',
    title: 'Voices from the Static (EVP)',
    titleAr: 'أصوات من التشويش (EVP): تسجيلات من المجهول ورسائل بلا مصدر',
    subtitle: 'Electronic Voice Phenomena — recordings from nowhere, messages from no one.',
    subtitleAr: 'ظاهرة الأصوات الإلكترونية الغامضة التي التقطتها أجهزة التسجيل في الغرف الفارغة.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    categoryLabelAr: 'ظواهر خارقة',
    date: 'Ongoing',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
    seoKeywordsEn: 'Electronic Voice Phenomena EVP, ghost voices recordings, paranormal static mystery',
    seoKeywordsAr: 'ظاهرة الأصوات الإلكترونية, EVP, تسجيلات خارقة, أصوات الموتى, أسرار الفيزياء الصوتية',
    excerpt: 'In 1959, Friedrich Jürgenson recorded birdsong and heard clear human voices addressing him by name. Decades of EVP research followed.',
    excerptAr: 'في عام 1959، سجل فريدريك يورغنسون أصوات الطيور وسَمِع أصواتاً أدمية تناديه باسمه بوضوح رغم أنه كان وحيداً في الحقل!',
    content: [
      'In 1959, Swedish producer Friedrich Jürgenson recorded ambient outdoor sounds and discovered distinct human voices on tape calling his name.',
      'Research into Electronic Voice Phenomena (EVP) continues to reveal audio signals captured under controlled acoustic isolation responding to questions in real time.',
    ],
    contentAr: [
      'في عام 1959، كان المنتج السويدي فريدريك يورغنسون يسجل أصوات الطيور، وعند إعادة تشغيل الشريط سمع أصوات بشرية واضحة تخاطبه وتذكر أسماء أقاربه الراحلين!',
      'أجرى العلماء والباحثون آلاف التسجيلات المعزولة وأثبتوا وجود ترددات صوتية تجيب على أسئلة مباشرة في الغرف المغلقة دون مصدر فيزيائي معلوم.'
    ],
    videoId: null,
    relatedIds: ['mothman-prophecy', 'simulation-theorem', 'dyatlov-pass-incident'],
  },

  /* ═══════════════════════════════════════
     11. SIMULATION THEOREM
  ═══════════════════════════════════════ */
  {
    id: 'simulation-theorem',
    title: 'The Simulation Hypothesis',
    titleAr: 'فرضية المحاكاة: هل نعيش جميعاً داخل برنامج حاسوبي عملاق؟',
    subtitle: 'What if the most terrifying truth is that none of this is real?',
    subtitleAr: 'ماذا لو كانت الحقيقة الأكثر رعباً هي أن عالمنا الحالي ليس إلا شفرات برمجية؟',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    categoryLabelAr: 'نظريات مظلمة',
    date: '2003 — Present',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
    seoKeywordsEn: 'Simulation Hypothesis Nick Bostrom, matrix theory physics, quantum simulation universe',
    seoKeywordsAr: 'فرضية المحاكاة, مصفوفة الماتريكس, نظريات الفيزياء المظلمة, نيك بوستروم, أسرار الكون',
    excerpt: 'Philosopher Nick Bostrom\'s 2003 paper argues that statistically, it is overwhelmingly likely we are living inside a computer simulation.',
    excerptAr: 'قدم الفيلسوف نيك بوستروم ورقة علمية تثبت رياضياً وبنسبة إحصائية ساحقة أننا نعيش في محاكاة برمجية تديرها حضارة متقدمة!',
    content: [
      'Nick Bostrom\'s 2003 simulation argument presents mathematical probability showing simulated conscious minds vastly outnumber real ones.',
      'Physicists note speed of light limit and quantum uncertainty closely mimic processing rendering optimizations in computer simulation architectures.',
    ],
    contentAr: [
      'في عام 2003، طرح الفيلسوف نيك بوستروم حجة رياضية تؤكد أنه إذا استطاعت أي حضارة تطوير أجهزة كمبيوتر قوية، فإن عدد الكائنات المحاكاة سيفوق الكائنات الحقيقية بمليارات المرات.',
      'يشير علماء الفيزياء إلى أن سرعة الضوء ومبدأ الشك في الفيزياء الكمية تشبه تماماً حدود المعالجة وتقنيات تقليل الضغط (Rendering) المستخدمة في ألعاب الفيديو!'
    ],
    videoId: null,
    relatedIds: ['voices-from-the-static', 'mothman-prophecy', 'fermi-paradox-dark-forest'],
  },

  /* ═══════════════════════════════════════
     12. FERMI PARADOX / DARK FOREST
  ═══════════════════════════════════════ */
  {
    id: 'fermi-paradox-dark-forest',
    title: 'The Dark Forest Theory',
    titleAr: 'ظرية الغابة المظلمة: السبب المرعب لسكوت الكائنات الفضائية',
    subtitle: 'Why the universe is silent — and why that silence is the most terrifying thing imaginable.',
    subtitleAr: 'لماذا يسود الصمت المطلق في الكون؟ ولماذا يُعد إرسال إشاراتنا للخارج انتحاراً بشرياً؟',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    categoryLabelAr: 'نظريات مظلمة',
    date: 'Ongoing',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=900&q=80',
    seoKeywordsEn: 'Dark Forest theory Fermi Paradox, alien contact danger, astronomy dark theories',
    seoKeywordsAr: 'نظرية الغابة المظلمة, مفارقة فيرمي, المخلوقات الفضائية, أسرار الفضاء, صمت الكون',
    excerpt: 'The Dark Forest theory suggests the universe is silent because every advanced civilization stays hidden to avoid destruction by predators.',
    excerptAr: 'تفترض نظرية الغابة المظلمة أن الكون مليء بالحضارات، لكن الجميع يلتزم الصمت ويختبئ لأن إعلان موقعك يعني إبادتك فوراً من المفترسين!',
    content: [
      'The Fermi Paradox asks why we see no evidence of alien life in a 13.8 billion-year-old universe filled with billions of habitable worlds.',
      'The Dark Forest Theory posits that all civilizations treat others as potential threats, choosing total silence or preemptive strikes as optimal survival strategies.',
    ],
    contentAr: [
      'تتساءل مفارقة فيرمي: إذا كان عمر الكون 13.8 مليار سنة ويحتوي على مليارات الكواكب، فأين الجميع ولماذا لا نرى أثراً للفضائيين؟',
      'تجيب نظرية الغابة المظلمة: الكون يشبه غابة مظلمة مليئة برماة مسلحين؛ أي حضارة ترفع صوتها وتعلن موقعها يتم القضاء عليها فوراً قبل أن تنمو وتصبح تهديداً!'
    ],
    videoId: null,
    relatedIds: ['simulation-theorem', 'mothman-prophecy', 'voices-from-the-static'],
  },

  /* ═══════════════════════════════════════
     13. MK ULTRA
  ═══════════════════════════════════════ */
  {
    id: 'mk-ultra-mind-control',
    title: 'MK-Ultra: The CIA\'s Secret Mind Control Program',
    titleAr: 'مشروع ام كي الترا (MK-Ultra): تجارب السيطرة على العقول التابعة للـ CIA',
    subtitle: 'The U.S. government drugged, tortured, and experimented on its own citizens.',
    subtitleAr: 'حقائق موثقة حول قيام الاستخبارات الأمريكية بتجارب السيطرة على العقول والتعذيب بالغاز والـ LSD.',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    categoryLabelAr: 'نظريات مظلمة',
    date: '1953–1973',
    readTime: '10 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=900&q=80',
    seoKeywordsEn: 'MK Ultra CIA mind control experiments, Sidney Gottlieb, Church Committee 1977',
    seoKeywordsAr: 'مشروع ام كي الترا, السيطرة على العقول, تجارب الـ CIA, أسرار المخابرات الأمريكية, حقائق مظلمة',
    excerpt: 'For twenty years, the CIA ran secret experiments using LSD, hypnosis, electroshock, and torture to break the human mind.',
    excerptAr: 'على مدى 20 عاماً، أدارت المخابرات الأمريكية برنامجاً سرياً لتدمير عقول المواطنين والسيطرة عليهم باستخدام العقاقير والموجات الكهربائية!',
    content: [
      'Authorized in 1953, CIA Project MK-Ultra conducted covert experiments at 80 institutions to develop interrogation and mind-control methods using LSD, sensory deprivation, and electroshock.',
      'Exposed by the Church Committee in 1977, the program officially admitted violating human rights and subjecting unwitting citizens to severe psychological damage.',
    ],
    contentAr: [
      'بدأ مشروع ام كي الترا عام 1953 بإشراف المخابرات الأمريكية الـ CIA لتطوير وسائل غسيل الأدمغة والسيطرة الكاملة على عقول البشر.',
      'استُخدمت عقاقير الـ LSD والصدمات الكهربائية المكثفة على مرائين ومساجين دون علمهم، وكشفت تحقيقات الكونغرس عام 1977 تفاصيل هذه الكارثة الأخلاقية.'
    ],
    videoId: null,
    relatedIds: ['simulation-theorem', 'fermi-paradox-dark-forest', 'zodiac-killer'],
  },

  /* ═══════════════════════════════════════
     14. POLTERGEIST OF ENFIELD
  ═══════════════════════════════════════ */
  {
    id: 'enfield-poltergeist',
    title: 'The Enfield Poltergeist',
    titleAr: 'طيف إنفيلد الشرير: القصة الحقيقية لأشهر منزل مسكون في بريطانيا',
    subtitle: 'For two years, investigators watched furniture move by itself.',
    subtitleAr: 'تحقيق رسمي استمر عامين شاهد خلاله الشرطة والصحفيون الأثاث يتحرك تلقائياً بالأجواء.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    categoryLabelAr: 'ظواهر خارقة',
    date: '1977–1979',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=900&q=80',
    seoKeywordsEn: 'Enfield Poltergeist true story, Hodgson house haunting 1977, paranormal investigation',
    seoKeywordsAr: 'طيف إنفيلد, منازل مسكونة, ظواهر خارقة, رعب إنفيلد 1977, أرواح شريرة',
    excerpt: 'In 1977 Enfield London, police officers signed reports witnessing furniture sliding untouched and strange voices emanating from young Janet Hodgson.',
    excerptAr: 'في عام 1977 بلندن، وقع أفراد الشرطة شهادات رسمية تؤكد رؤيتهم للأثاث وهو يطير في الهواء وأصوات رجالية تخرج من طفلة!',
    content: [
      'In August 1977 in Enfield London, a single mother called police after observing heavy furniture moving on its own. Responding officers signed statements verifying the movement.',
      'Over two years, SPR researchers recorded knocking noises, levitation, and guttural adult voices speaking through 11-year-old Janet Hodgson.',
    ],
    contentAr: [
      'في أغسطس 1977 في منطقة إنفيلد بـ لندن، اتصلت الأم بالشرطة بعد أن شاهدت الخزانة تتحرك تلقائياً. وسجلت الشرطة في تقريرها الرسمي مشاهدة الكرسي وهو ينزلق في الهواء دون لمسه.',
      'وثق الباحثون على مدى عامين أصوات طلقات خبط في الجدران، وخروج صوت رجل مسن من حنجرة الطفلة جانيت ذات الـ 11 عاماً!'
    ],
    videoId: null,
    relatedIds: ['mothman-prophecy', 'voices-from-the-static', 'dyatlov-pass-incident'],
  },

  /* ═══════════════════════════════════════
     15. TAMAM SHUD
  ═══════════════════════════════════════ */
  {
    id: 'tamam-shud-somerton-man',
    title: 'The Somerton Man — Tamam Shud',
    titleAr: 'لغز رجل سومرتون (تمت الإدانة): الجثة الأنيقة والقصاصة الفارسي',
    subtitle: 'An unidentified man. A poisoning. A hidden code. No answers in 75 years.',
    subtitleAr: 'جثة رجل أنيق على شاطئ أستراليا، سم مجهول، وقصاصة ورق مكتوب عليها بالوفارسية "تمت الإدانة".',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: 'December 1, 1948',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=900&q=80',
    seoKeywordsEn: 'Somerton Man Tamam Shud mystery, Australia cold case 1948, encrypted code secret pocket',
    seoKeywordsAr: 'رجل سومرتون, تمام شد, قضايا لم تحل, شفرات غامضة, استراليا 1948',
    excerpt: 'Found dead on Somerton Beach in 1948 with all clothing labels removed, carrying a secret pocket snippet reading "Tamam Shud".',
    excerptAr: 'عُثر على جثة رجل أنيق على شاطئ سومرتون عام 1948، نزعت كل العلامات التجارية من ملابسه وبجيبه قصاصة سرية مكتوب عليها "Tamam Shud"!',
    content: [
      'On December 1, 1948, a dead man was found propped against the Somerton Beach wall in Australia, carrying no identification and poisoned by an untraceable substance.',
      'Tucked into a hidden trousers pocket was a scrap torn from Omar Khayyam\'s Rubaiyat reading "Tamam Shud" ("It is finished"). A code found inside the book remains unsolved.',
    ],
    contentAr: [
      'في 1 ديسمبر 1948، عُثر على جثة رجل مجهول مستندة لخافت شاطئ سومرتون بـ أستراليا، ملابسه أنيقة للغاية ولكن نزعت منها كل البطاقات التوضيحية.',
      'في جيب سري مخفي، عُثر على قصاصة شظية ورقية مكتوب عليها باللغة الفارسية "Tamam Shud" وتعني "انتهى"، وظلت شفرته وسر وفاته من أكبر الألغاز.'
    ],
    videoId: null,
    relatedIds: ['db-cooper-hijacking', 'dyatlov-pass-incident', 'vanishing-of-flight-19'],
  },

  /* ═══════════════════════════════════════
     16. UNIT 731
  ═══════════════════════════════════════ */
  {
    id: 'unit-731-japan',
    title: 'Unit 731 — Japan\'s Secret Biological Warfare Program',
    titleAr: 'الوحدة 731 اليابانية: أبشع التجارب البيولوجية على البشر في التاريخ',
    subtitle: 'The most horrific medical experiments in history. The perpetrators were never prosecuted.',
    subtitleAr: 'تجارب بكتيرية وتشريح أحياء أودت بحياة الآلاف، والعالم الذي أفلت من العقاب!',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    categoryLabelAr: 'جرائم واقعية',
    date: '1937–1945',
    readTime: '11 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=900&q=80',
    seoKeywordsEn: 'Unit 731 Japanese biological warfare, Shiro Ishii experiments, Manchuria WW2 horror',
    seoKeywordsAr: 'الوحدة 731, جرائم الحرب اليابانية, تجارب بشرية, شيرو إيشي, أسرار الحرب العالمية الثانية',
    excerpt: 'The Imperial Japanese Army conducted biological warfare experiments on thousands of prisoners in Manchuria. The lead scientist received US immunity for data.',
    excerptAr: 'أجرت الوحدة 731 اليابانية تجارب بيولوجية مرعبة على آلاف المساجين الأحياء في منشوريا، ومنحت أمريكا حصانة للعلماء مقابل بيانات التجارب!',
    content: [
      'Operated by General Shirō Ishii between 1937 and 1945 in Manchuria, Unit 731 subjected over 3,000 human prisoners to plague infection, vivisection without anesthesia, and extreme frostbite testing.',
      'Following Japan\'s surrender, the U.S. granted Ishii immunity in exchange for his biological research, allowing the perpetrators to avoid prosecution.',
    ],
    contentAr: [
      'قاد الجنرال الشيطاني "شيرو إيشي" الوحدة 731 بين عامي 1937 و 1945 في منشوريا، واستخدم أكثر من 3000 سجين حي لتجارب الطاعون والتشريح بدون تخدير.',
      'بعد استسلام اليابان، منحت السلطات الأمريكية الحصانة لـ إيشي وعلمائه مقابل الحصول على نتائج تحليلاتهم البيولوجية!'
    ],
    videoId: null,
    relatedIds: ['mk-ultra-mind-control', 'zodiac-killer', 'hinterkaifeck-murders'],
  },

  /* ═══════════════════════════════════════
     17. THE NUMBERS STATIONS
  ═══════════════════════════════════════ */
  {
    id: 'numbers-stations-mystery',
    title: 'The Numbers Stations',
    titleAr: 'محطات الأرقام المجهولة: بث لاسلكي سري للجواسيس لم يتوقف حتى اليوم',
    subtitle: 'Shortwave radio broadcasts of endless numbers to unknown recipients.',
    subtitleAr: 'ترددات راديو تبث أرقاماً متتالية بصوت اصطناعي غريب عبر القارات دون إعلان من أي دولة.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: 'Cold War — Present',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
    seoKeywordsEn: 'Shortwave numbers stations mystery, Lincolnshire Poacher, espionage radio encryption',
    seoKeywordsAr: 'محطات الأرقام, الراديو القصير, أسرار الجاسوسية, شفرات الحرب الباردة, ألغاز لاسلكية',
    excerpt: 'For over 50 years, shortwave frequencies broadcast human or synthetic voices reading endless numbers to unknown listeners.',
    excerptAr: 'لأكثر من 50 عاماً، تبث موجات الراديو القصيرة حول العالم أصواتاً آلية تقرأ سلسلات من الأرقام المشفرة الموجهة للجواسيس!',
    content: [
      'Since the Cold War, shortwave radio frequencies continuously broadcast streams of numbers, melodies, and phonetic codes intended for secret agents operating worldwide.',
      'Using uncrackable one-time pad encryption, these stations operate out of undisclosed military sites and remain active present day.',
    ],
    contentAr: [
      'منذ أيام الحرب الباردة، تبث محطات الراديو ذات الموجات القصيرة سيلآ لا يتوقف من الأرقام المشفرة بصوت طفل أو امرأة، موجهة للمخبرين والجواسيس.',
      'تستعين هذه الإشارات بنظام التشفير غير القابل للكسر (One-Time Pad)، ورغم تطور الإنترنت لا تزال هذه المحطات تبث حتى اللحظة!'
    ],
    videoId: null,
    relatedIds: ['mk-ultra-mind-control', 'tamam-shud-somerton-man', 'db-cooper-hijacking'],
  },

  /* ═══════════════════════════════════════
     18. SPRING HEELED JACK
  ═══════════════════════════════════════ */
  {
    id: 'spring-heeled-jack',
    title: 'Spring Heeled Jack',
    titleAr: 'جاك ذو الكعب القافز: الشيطان الذي قفز فوق مباني لندن',
    subtitle: 'Victorian London\'s leaping devil — seen by hundreds, explained by no one.',
    subtitleAr: 'مخلوق ذو عيون متوهجة ومخالب يرتدي عباءة سوداء وقفز فوق أسطح لندن لـ 60 عاماً!',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    categoryLabelAr: 'ظواهر خارقة',
    date: '1837–1904',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80',
    seoKeywordsEn: 'Spring Heeled Jack Victorian London, leaping monster folklore, urban legend mystery',
    seoKeywordsAr: 'جاك ذو الكعب القافز, أساطير لندن, ظواهر خارقة, رعب العصر الفيكتوري, أسرار غامضة',
    excerpt: 'Beginning in 1837, Londoners reported a clawed figure with glowing red eyes capable of leaping high walls and breathing blue flames.',
    excerptAr: 'بداية من عام 1837، شاهد أهالي لندن كائناً غريباً بمخالب وعيون حمراء يقفز فوق أسوار وأسطح المنازل وينفث لهباً أزرق!',
    content: [
      'Starting in 1837, Victorian London experienced recurring terror from Spring Heeled Jack — a tall, clawed figure in a dark cape capable of leaping rooftops and breathing blue flame.',
      'Sighting reports spanned 67 years and included soldiers, magistrates, and hundreds of citizens before the phenomenon vanished in 1904.',
    ],
    contentAr: [
      'بدأت المشاهدات عام 1837 لشيء يتنكر في عباءة سوداء، يملك مخالب حادة وعيون تشع بالحرارة، ويستطيع القفز لمسافات شاهقة فوق المباني.',
      'استمرت البلاغات الرسمية لدى الشرطة والجيش لـ 67 عاماً كاملة في مختلف مدن بريطانيا دون إلقاء القبض عليه!'
    ],
    videoId: null,
    relatedIds: ['mothman-prophecy', 'enfield-poltergeist', 'jack-the-ripper'],
  },

  /* ═══════════════════════════════════════
     19. THE MANDELA EFFECT
  ═══════════════════════════════════════ */
  {
    id: 'mandela-effect-reality',
    title: 'The Mandela Effect',
    titleAr: 'تأثير مانديلا: الذكريات الجماعية المزيفة وهل تتداخل الأكوان الموازية؟',
    subtitle: 'Millions of people share the same false memories.',
    subtitleAr: 'ملايين البشر يتذكرون أحداثاً وتفاصيل متطابقة لم تحدث قط في واقعنا الحالي!',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    categoryLabelAr: 'نظريات مظلمة',
    date: '2009 — Present',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
    seoKeywordsEn: 'Mandela Effect alternate reality, false collective memories, parallel universes theory',
    seoKeywordsAr: 'تأثير مانديلا, الأكوان الموازية, ذاكرة جماعية مزيفة, نظريات الفيزياء المظلمة, أسرار الواقع',
    excerpt: 'Millions vividly remember Nelson Mandela dying in prison in the 1980s, or the Monopoly man wearing a monocle. What causes mass shared false memories?',
    excerptAr: 'يتذكر الملايين بيقين تام وفاة نيلسون مانديلا في السجن في الثمانينات، أو وجود نظارة على عين رجل المونوبولي التي لم توجد أبداً!',
    content: [
      'Coined by Fiona Broome in 2009, the Mandela Effect describes widespread, detailed false memories shared by millions of unrelated individuals.',
      'Explanations range from cognitive confabulation to quantum physics theories regarding shifting parallel timelines.',
    ],
    contentAr: [
      'اكتشفت فيونا بروم عام 2009 أن ملايين البشر يتشاركون ذكريات تفصيلية متطابقة عن وفاة مانديلا في السجن وتغطية جنازته للتلفزيون بالثمانينات، بينما هو خرج عام 1990 وتوفي 2013!',
      'تتعدد التفسيرات بين الانحياز المعرفي للذاكرة البشرية، وبين نظريات الفيزياء الكمية التي تفترض انزلاق الوعي البشري بين خطوط زمنية وأكوان موازية متداخلة.'
    ],
    videoId: null,
    relatedIds: ['simulation-theorem', 'fermi-paradox-dark-forest', 'mothman-prophecy'],
  },

  /* ═══════════════════════════════════════
     20. THE TAOS HUM
  ═══════════════════════════════════════ */
  {
    id: 'the-taos-hum',
    title: 'The Taos Hum',
    titleAr: 'طنين تاوس الغامض: الصوت المجهول الذي يدفع الناس للجنون',
    subtitle: 'Two percent of residents hear it. Scientists cannot find its source.',
    subtitleAr: 'صوت طنين منخفض التردد يسمعه 2% من السكان فقط وأجهزة الصوت الحساسة تعجز عن التقاط مصدره!',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    categoryLabelAr: 'أسرار وغوامض',
    date: '1990s — Present',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=900&q=80',
    seoKeywordsEn: 'Taos Hum mystery New Mexico, unexplained low frequency sound, auditory anomaly',
    seoKeywordsAr: 'طنين تاوس, أصوات غامضة, ظواهر غير مفسرة, أسرار الفيزياء, ألغاز الصوت',
    excerpt: 'In Taos, New Mexico, 2% of residents hear a persistent low-frequency drone similar to an idling diesel engine that instruments cannot detect.',
    excerptAr: 'في بلدة تاوس بـ نيو مكسيكو، يسمع 2% من السكان طنيناً متواصلاً يشبه محرك ديزل بعيد دون أن تتمكن الأجهزة الفائقة من رصده!',
    content: [
      'Since the early 1990s, a fraction of Taos residents have suffered from an inescapable 30-80 Hz humming sound driving sleep deprivation and headaches.',
      'Government investigations involving Los Alamos labs failed to isolate any mechanical or environmental origin, making it one of acoustics\' most baffling unsolved anomalies.',
    ],
    contentAr: [
      'منذ التسعينات، يعاني جزء من سكان تاوس بـ نيو مكسيكو من طنين مزعج مستمر بتردد منخفض يشبه محرك ديزل لا يتوقف أبداً.',
      'فحشت أرقى مختبرات الفيزياء الصوتية المنطقة بأجهزة دقيقة دون التوصل لأي مصدر خارجي، مما يجعله أحد أغرب الألغاز الفيزيائية والصوتية الحية.'
    ],
    videoId: null,
    relatedIds: ['numbers-stations-mystery', 'mothman-prophecy', 'voices-from-the-static'],
  },

];

/* ─── helpers ─── */
export const getStoryById        = (id)  => stories.find(s => s.id === id);
export const getStoriesByCategory = (cat) => stories.filter(s => s.category === cat);
export const getFeaturedStories  = ()    => stories.filter(s => s.featured);
export const getLatestStories    = (n=6) => [...stories].slice(0, n);
export const getRelatedStories   = (ids) => ids.map(id => stories.find(s => s.id === id)).filter(Boolean);