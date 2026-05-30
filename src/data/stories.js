export const categories = [
  { id: 'mysteries',    label: 'Mysteries',    icon: '◈', description: 'Cases that defy explanation. Disappearances, anomalies, and events that logic cannot contain.' },
  { id: 'true-crime',   label: 'True Crime',   icon: '⊕', description: 'Real accounts of darkness. Stories that should not exist, yet do.' },
  { id: 'dark-theories',label: 'Dark Theories', icon: '◉', description: 'Ideas that governments buried. Patterns hidden in plain sight.' },
  { id: 'supernatural', label: 'Supernatural', icon: '◎', description: 'Encounters beyond our understanding. What happens when the veil thins.' },
];

export const stories = [

  /* ═══════════════════════════════════════
     1. DYATLOV PASS
  ═══════════════════════════════════════ */
  {
    id: 'dyatlov-pass-incident',
    title: 'The Dyatlov Pass Incident',
    subtitle: 'Nine hikers. An unexplained terror in the night. No survivors.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: 'February 2, 1959',
    readTime: '10 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=80',
    excerpt: 'In February 1959, nine experienced Soviet hikers died under circumstances investigators could only describe as "an unknown compelling force." Their tent was slashed open from the inside. They fled barefoot into minus-30 temperatures. Three had injuries consistent with a car crash — but no external wounds.',
    content: [
      'The Ural Mountains in February are indifferent to human survival. Igor Dyatlov knew this. His team of nine — graduates of the Ural Polytechnical Institute, experienced skiers — had conquered difficult terrain before. They were not reckless. They were not afraid.',
      'What the search party found on the slope of Kholat Syakhl — Dead Mountain, in the language of the indigenous Mansi people — shattered every assumption about what a mountain could do to people.',
      'The tent had been slashed from the inside. Not unzipped, not torn by wind. Cut open, deliberately, from within. The hikers had burst out into the freezing darkness in their socks. Some were barefoot. The temperature was minus thirty degrees Celsius.',
      'Six died of hypothermia. Their footprints led in a calm, orderly line away from the tent toward the treeline — as if they were walking away from something rather than running. Whatever they saw, it did not make them panic. It made them leave.',
      'The other three bodies were not found until May, buried under four meters of snow. These three told a different story. Nicolai Thibeaux-Brignolles had a fractured skull. Lyudmila Dubinina and Semyon Zolotaryov had catastrophic chest injuries — crushed ribs, fractured sternums — that a forensic expert compared to the force of a car accident. Neither had external wounds. Dubinina was missing her tongue and eyes.',
      'The clothing of several hikers was found to be radioactive. Photographs from the group\'s own cameras showed unidentified orange spheres in the night sky. The Soviet government classified the investigation. The official conclusion, when it came, read simply: "a spontaneous unknown force."',
      'Russia reopened the case in 2019 and announced an avalanche. Physicists, mountaineers, and the surviving families disputed this. The tent\'s position, the footprints, the injuries, the radiation — none of it fits a snow slide. Sixty-five years later, Dead Mountain keeps its secret.',
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
    subtitle: 'Five torpedo bombers. Fourteen men. No wreckage ever found.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: 'December 5, 1945',
    readTime: '8 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&q=80',
    excerpt: 'On a cloudless afternoon over the Atlantic, five Navy bombers vanished during a routine training flight. Their final radio transmissions described compasses spinning uselessly, the sea turned white, and the sun appearing in the wrong direction. The rescue plane sent to find them also disappeared.',
    content: [
      'December 5, 1945. Fort Lauderdale Naval Air Station, Florida. Five TBF Avenger torpedo bombers — Flight 19 — lift off at 2:10 PM for a standard triangular navigation exercise. Clear skies. Experienced crew. Expected return: 5:23 PM.',
      'At 3:40 PM, Lieutenant Charles Taylor\'s voice breaks through the static with something that does not belong in a routine training report: "We have just passed over a small island. No other land in sight."',
      'The controller who answered him heard increasing confusion over the next two hours. Taylor\'s compass was malfunctioning. He wasn\'t certain of his position. Then, more disturbing: "Everything looks strange, even the ocean." And later, from one of the other pilots: "We can\'t find west. Everything is wrong."',
      'Taylor\'s last confirmed transmission: "All planes close up tight. We\'ll fly north until we hit the beach or run out of gas." After that, silence.',
      'A Martin Mariner flying boat carrying thirteen men was dispatched to search. Twenty-three minutes after takeoff, it too vanished. A surface vessel in the area reported seeing an explosion in the sky — but no debris was ever recovered.',
      'The U.S. Navy searched 250,000 square miles of ocean. Nothing. Not a life jacket, not an oil slick, not a single body. The official report attributed the loss to "causes or reasons unknown." A board of inquiry initially blamed pilot error, but Taylor\'s mother fought the ruling for years, and the Navy eventually amended it to "unknown."',
      'What makes this case endure is not the disappearance itself — aircraft and ships have vanished before — but what the men reported before they vanished. The sea that "didn\'t look right." The sun in the wrong place. The compass that offered nothing. Whatever Flight 19 found out there, it found it in clear weather, in a place they thought they knew, in the middle of the afternoon.',
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
    subtitle: 'A farmstead in Bavaria. Six dead. The killer lived there for days.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: 'March 31, 1922',
    readTime: '9 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
    excerpt: 'Weeks before the murders, the farmer told neighbors about footsteps in the attic, a strange newspaper no one had brought home, and tracks in the snow leading to the farm from the forest — with none leading back. Six people were killed. The killer then stayed, feeding the cattle and eating the family\'s food, for days.',
    content: [
      'The Hinterkaifeck farm was six miles from the nearest town of Schrobenhausen in rural Bavaria. In March 1922, it housed Andreas Gruber, 63; his wife Cäzilia, 72; their widowed daughter Viktoria, 35; her children Cäzilia, 7, and Josef, 2; and the newly hired maid Maria Baumgartner, who had arrived only the day before she was killed.',
      'In the days preceding the murders, Andreas Gruber made a series of remarks to neighbors that, in retrospect, read like a man describing his own approaching death without knowing it. He had found footprints in the snow leading to the farm from the forest — but none leading away. He had discovered a newspaper that belonged to no one in the household. He had heard someone moving through the attic at night.',
      'He did not leave. He did not call police. Whatever Andreas Gruber felt about the footprints and the attic sounds, it was not enough to make him go.',
      'On April 4th, 1922, neighbors who had not seen activity at the farm in days entered to investigate. They found the animals alive and fed. The mail had been brought in. The chimney had been producing smoke for days. Someone had been living there.',
      'The bodies were in the barn: Andreas, Cäzilia senior, Viktoria, and seven-year-old Cäzilia, killed one by one with a mattock as they were lured in. Young Josef and the maid were found in the house. The weapon was found on the farm. The killer had apparently sat in the hayloft above the barn for hours, waiting.',
      'German police questioned over one hundred suspects. The crime was never solved. Forensic techniques of 2007 and 2019 were applied to preserved evidence — including hair found in the victims\' hands — and yielded nothing conclusive.',
      'What distinguished Hinterkaifeck from other rural murders of the era was not the violence itself but the aftermath. Whoever killed six people on that farm then stayed. They fed the cattle. They cooked food from the kitchen. They slept there. For at least three days after the murders, the killer of the Gruber family lived inside the Gruber family\'s home.',
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
    subtitle: 'Five children vanished in a Christmas Eve fire. No remains were ever found.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: 'December 24, 1945',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=900&q=80',
    excerpt: 'The Sodder house in West Virginia burned on Christmas Eve, 1945. George and Jennie escaped with four of their ten children. The other five were never found — not in the ashes, not in the surrounding area, not in the decades that followed. Fire investigators later said the fire could not have been hot enough to leave no remains.',
    content: [
      'George Sodder was a coal truck driver in Fayetteville, West Virginia. He had been born in Italy and was outspoken about his opposition to Mussolini — a fact that would later become one of many disturbing threads in a case that never resolved.',
      'On Christmas Eve, 1945, something woke Jennie Sodder at 1 AM. The house was on fire. She and George escaped with four of their children. The other five — Maurice, 14; Martha, 12; Louis, 9; Jenetta, 8; and Betty, 5 — did not come out.',
      'What followed defies the logic of a house fire. The phone line had been cut before the fire started, not burned. The family\'s vehicles, which George attempted to use to reach the second-floor windows, would not start — despite having run perfectly hours earlier. A fuse box that should have triggered a fusible link did not. A man had been observed that evening walking around the property, examining the vehicles.',
      'When the fire was extinguished, there were no bones in the ashes. Fire investigators at the time said the fire must have cremated the children completely — but pathologists later pointed out that human bones survive even the most intense fires. Crematoriums operating at 1,600 degrees Fahrenheit for two hours leave identifiable bone fragments. A house fire does not.',
      'In 1967, Jennie received a photograph in the mail. It showed a young man in his twenties. She believed the face — the jaw, the eyes — belonged to her son Louis. The photo had been postmarked from a city in Florida. No return address. No explanation.',
      'George Sodder erected a billboard on Route 16 with photographs of his five children and a reward for information. It stood until his death in 1969. Jennie kept it up until her own death in 1989. Their surviving children have never stopped asking.',
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
    subtitle: 'He mailed encrypted ciphers to newspapers. One went unsolved for 51 years.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: '1968–1969',
    readTime: '11 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=900&q=80',
    excerpt: 'Between 1968 and 1969, a killer in Northern California murdered at least five people and claimed responsibility for 37. He sent taunting letters to newspapers, written in code. He was never caught. One of his ciphers went unsolved for 51 years. Another has never been cracked.',
    content: [
      'The Zodiac operated in Northern California for at least two years and possibly longer. He chose couples parked in secluded areas, a taxi driver, and two victims on a public beach in broad daylight. He survived a struggle with one of his victims. He phoned police himself after an attack. He had a taste for theater.',
      'What set the Zodiac apart from other killers of his era was the letters. Beginning in 1969, he sent communications to the San Francisco Chronicle, the San Francisco Examiner, and the Vallejo Times-Herald. They contained details of the murders only the killer could know. They also contained, in the first batch, three coded ciphers.',
      'He wrote that if the newspapers did not publish his ciphers on their front pages, he would go on a kill rampage. The papers published. The first cipher — 408 symbols across three sections — was solved within a week by a high school teacher and his wife. The decoded message was arrogant, chilling, and theologically confused. It ended: "I will not give you my name because you will try to slow down or stop my collection of slaves for my afterlife."',
      'A second cipher, sent later, was 340 characters. It went unsolved for 51 years. In December 2020, a team of amateur codebreakers cracked it. The message read, in part: "I hope you are having lots of fun in trying to catch me... I am not afraid of the gas chamber because it will send me to paradice all the sooner."',
      'A third cipher — the "Z13" or "My Name Is" cipher — has never been solved. Thirteen characters. The Zodiac claimed it contained his name.',
      'The prime suspect for decades was Arthur Leigh Allen, a schoolteacher and convicted sex offender with a Zodiac watch and a history of violence toward women. DNA from the letters did not match him. Handwriting analysis was inconclusive. He died in 1992 with no charges ever filed.',
      'The Zodiac\'s confirmed victim count is five. His claimed count is 37. The gap between those two numbers — 32 people — has never been explained.',
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
    subtitle: 'The most infamous unsolved murder in American history.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: 'January 15, 1947',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    excerpt: 'Elizabeth Short\'s body was found in a Los Angeles vacant lot, completely drained of blood, bisected at the waist with surgical precision, and posed with a mocking smile carved from the corners of her mouth. The killer sent her belongings to newspapers. The case was never solved.',
    content: [
      'Betty Bersinger was walking through a vacant lot in the Leimert Park neighborhood of Los Angeles on the morning of January 15, 1947. She assumed what she saw on the grass was a discarded store mannequin. She kept walking. Then she looked more closely.',
      'The body of Elizabeth Short, 22, was completely drained of blood. It had been carefully washed. It had been bisected at the waist — cut clean through — and the two halves had been posed several inches apart on the grass, as if arranged. The killer had cut the corners of her mouth upward in a Glasgow smile. Her face had been scrubbed with a rough cloth. There were rope marks on her wrists and ankles, indicating she had been restrained for an extended period before death.',
      'The Los Angeles Examiner received a phone call the next day from a man who said he was the killer and promised to turn himself in. He did not. Instead, he mailed Elizabeth Short\'s belongings — her address book, her birth certificate, her photographs — to the newspaper. The items had been scrubbed with gasoline to remove fingerprints.',
      'The LAPD investigated over 150 suspects. The FBI investigated separately. The case generated over 50 false confessions — a record that has never been beaten. The genuine killer, operating in an era before DNA evidence, left nothing that could place him at the scene.',
      'Over the following decades, various suspects emerged: a surgeon, a doctor whose son later confessed on his behalf, a movie set builder, a known sex offender. None have been definitively identified.',
      'What the Black Dahlia case reveals, more than any single suspect, is the mechanics of how a city projects its anxieties onto a victim. Elizabeth Short became a symbol before she was understood as a person. The theater of the killing — the staging, the trophy mailing, the Glasgow smile — was designed to be seen. The killer wanted Los Angeles to look at what he had done. Los Angeles has never stopped looking.',
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
    subtitle: 'Victorian London\'s most terrifying killer — and the world\'s first true cold case.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: 'August–November 1888',
    readTime: '12 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80',
    excerpt: 'In the autumn of 1888, a killer stalked the Whitechapel district of London. Five women were murdered with surgical precision in eleven weeks. The killer sent a taunting letter to police, signed "Jack the Ripper." He was never identified. 136 years later, he still hasn\'t been.',
    content: [
      'Whitechapel in 1888 was one of the most densely populated and impoverished districts in the world. Thousands of people lived in a square mile of narrow streets, overcrowded lodging houses, and gas-lit alleyways where the fog came in thick enough to conceal almost anything.',
      'The five canonical Ripper victims — Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes, and Mary Jane Kelly — were killed between August 31 and November 9, 1888. Each murder showed escalating surgical confidence. The killer removed internal organs with apparent knowledge of anatomy. The final victim, Kelly, was found in her room after hours of work. She was almost unrecognizable as human.',
      'A letter arrived at the Central News Agency on September 27. It was addressed "Dear Boss" and written in red ink. It mocked the police, promised more murders, and signed off with a name: "Jack the Ripper." Whether this letter was from the actual killer or a journalist\'s fabrication remains debated. The name, however, embedded itself in history permanently.',
      'Scotland Yard\'s investigation was the most intensive in Victorian history. They interviewed thousands of witnesses. They used the new science of forensic photography at crime scenes. They received thousands of letters naming suspects. None of it led to an arrest.',
      'The suspect list that has accumulated since 1888 is extraordinary in its breadth: a Polish barber, a Liverpool cotton merchant, a member of the royal family, a doctor, a barrister, a painter, a Russian-born immigrant, and dozens of others. DNA evidence was tested against some suspects in 2014 using a shawl allegedly found near one victim. The results were contested. The science was disputed. Nothing was conclusively established.',
      'What the Ripper case inaugurated was the world\'s first modern media murder frenzy — and the world\'s first cold case that the public refused to let go. Every decade since 1888 has produced new suspects, new theories, new books. The fog of Whitechapel has never quite lifted.',
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
    subtitle: 'He hijacked a plane, collected $200,000 in ransom, and jumped into a storm. No one ever found him.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: 'November 24, 1971',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
    excerpt: 'On Thanksgiving Eve 1971, a man in a business suit bought a ticket under the name Dan Cooper, hijacked a Northwest Orient flight, collected $200,000 in ransom, released the passengers, and then parachuted from the back of the plane into a dark Pacific Northwest storm. He has never been found. His identity has never been established.',
    content: [
      'He paid cash for his ticket. He wore a dark business suit, a black tie with a mother-of-pearl tiepin, and dark sunglasses. Witnesses later described him as mid-40s, dark complexion, about six feet tall. He ordered a bourbon and soda and was described by the flight attendant who dealt with him as "calm and not nervous."',
      'After takeoff from Portland, he passed a note to the flight attendant. She assumed it was his phone number. He leaned over and told her she should read it. The note said he had a bomb.',
      'His demands were specific and knowledgeable: $200,000 in unmarked twenty-dollar bills, four parachutes — two military-grade, two civilian — and a refueling stop in Reno. The FBI complied. The passengers were released in Seattle. The crew, under his instruction, flew south toward Mexico City at low altitude with the landing gear down and the flaps partially extended.',
      'Somewhere over the Cascade Mountains in Washington State, at 8:13 PM on Thanksgiving Eve, he opened the rear airstair of the Boeing 727 and jumped into a 200-mph wind in a rainstorm in the dark. He had not asked for cold-weather gear. He had not asked for night-vision equipment. He had taken only one of the four parachutes.',
      'In 1980, a young boy found $5,800 in decaying twenty-dollar bills on the banks of the Columbia River. The serial numbers matched Cooper\'s ransom. No other money has ever been recovered. No body. No parachute. No aircraft parts.',
      'The FBI investigated for 45 years before officially suspending active investigation in 2016. Over the decades, more than 1,000 suspects were investigated. Several confessed on their deathbeds — none convincingly. The case remains the only unsolved air piracy in American aviation history.',
      'What lingers about D.B. Cooper is not just the audacity but the competence. He knew the 727\'s rear airstair could be operated in flight — information not publicly known at the time. He knew specific technical details about the aircraft. He did not panic. He tipped the flight attendant. And then he stepped off the edge of the world and was never seen again.',
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
    subtitle: 'For 13 months, residents reported a winged creature. Then the Silver Bridge collapsed.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    date: '1966–1967',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509470475192-4516873b4f00?w=900&q=80',
    excerpt: 'Between November 1966 and December 1967, over 100 residents of Point Pleasant, West Virginia reported seeing a large winged humanoid with glowing red eyes. Some reported prophetic visions. Some received cryptic phone calls. On December 15, 1967, the Silver Bridge collapsed, killing 46 people. The sightings stopped.',
    content: [
      'It began on November 15, 1966. Two young couples driving near an abandoned TNT plant outside Point Pleasant encountered something standing near the road. They described it as grey, roughly humanoid, between six and seven feet tall, with wings folded against its back and two enormous red eyes that glowed in their headlights. When they drove away, it followed them — flying alongside their car at over 100 miles per hour without moving its wings.',
      'Over the next thirteen months, more than one hundred people in and around Point Pleasant reported similar encounters. The accounts were remarkably consistent: a large humanoid shape, sometimes described as having a ten-foot wingspan, always with the red eyes. Several witnesses reported that the creature seemed to watch them from rooftops or treetops before launching itself silently into the air.',
      'The sightings coincided with a cluster of other anomalies that Point Pleasant residents would later struggle to explain rationally. Electrical interference. Televisions turning on by themselves. Stray dogs disappearing. An unusual number of UFO sightings. And — most disturbing — phone calls.',
      'Several witnesses reported calls from a male voice speaking in a flat, accented tone. The voice claimed to know personal information about the recipients. Some claimed the calls predicted future events accurately. The phenomenon became known as Men in Black activity, after reports from some witnesses of visits from men in black suits who seemed to know about the sightings before being told.',
      'At 5:04 PM on December 15, 1967, the Silver Bridge connecting Point Pleasant to Gallipolis, Ohio, collapsed without warning during rush hour. The bridge fell in less than sixty seconds. Forty-six people died. It was later determined to have failed due to a single corroded eyebar in the suspension chain — a failure that had been developing for years.',
      'The Mothman sightings stopped immediately after the collapse. Some witnesses claimed they had received visions or feelings of dread in the days before the disaster. Whether the entity was a warning, a harbinger, or a coincidence is a question Point Pleasant has never stopped asking.',
    ],
    videoId: null,
    relatedIds: ['voices-from-the-static', 'simulation-theorem', 'dyatlov-pass-incident'],
  },

  /* ═══════════════════════════════════════
     10. EVP / VOICES FROM STATIC
  ═══════════════════════════════════════ */
  {
    id: 'voices-from-the-static',
    title: 'Voices from the Static',
    subtitle: 'Electronic Voice Phenomena — recordings from nowhere, messages from no one.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    date: 'Ongoing',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
    excerpt: 'In 1959, Friedrich Jürgenson recorded birdsong in the Swedish countryside. When he played the tape back, he heard a voice clearly addressing him by name. He had been alone. What followed was decades of research into Electronic Voice Phenomena — recordings that appear to contain voices with no identifiable physical source.',
    content: [
      'Friedrich Jürgenson was a Swedish film producer with no particular interest in the paranormal. In the summer of 1959, he placed a microphone in a field near his country home to record birdsong. When he played the tape back indoors, the birdsong was there. So was a voice.',
      'It called him by name. It spoke clearly enough to be understood. He had been alone when he made the recording.',
      'Jürgenson repeated the experiment. Again voices appeared on the tape — voices that commented on his activities, addressed deceased relatives by name, and occasionally spoke in languages he did not know at the time of recording and only later had translated. He published his findings in 1964 under the title "Voices from Space."',
      'His work reached Latvian psychologist Konstantīns Raudive, who approached the phenomenon with scientific rigor. Over the following decade, Raudive made over 100,000 recordings under controlled conditions with electronic engineers present. He published his findings in 1968. The book included recorded examples that were examined by independent audio engineers, who confirmed that the voices were present on the tape and were not explicable by obvious causes.',
      'The field he pioneered — Electronic Voice Phenomena, or EVP — has accumulated thousands of researchers and millions of recordings since the 1960s. The most rigorous among them acknowledge that the majority of perceived voices can be explained by auditory pareidolia, radio frequency interference, and the human brain\'s powerful tendency to find pattern in noise.',
      'But a subset of recordings remains genuinely difficult to explain. Voices that respond in real time to questions asked aloud in empty rooms. Voices that name people the experimenter has not mentioned. Voices that contain information the experimenter verifiably did not possess. Whether these represent artifacts of consciousness, remnants of the dead, or something else entirely is a question that the physics of sound has not yet answered.',
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
    subtitle: 'What if the most terrifying truth is that none of this is real?',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    date: '2003 — Present',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
    excerpt: 'Philosopher Nick Bostrom\'s 2003 paper presents a trilemma with no comfortable exit: either civilizations consistently destroy themselves before reaching technological maturity, or advanced civilizations have no interest in simulating their history, or we are almost certainly living inside a computer simulation right now.',
    content: [
      'The argument is built on arithmetic that is difficult to escape. If a civilization survives long enough to develop advanced computing technology, and if even a small fraction of such civilizations choose to run detailed simulations of their own history, then the number of simulated minds will eventually dwarf the number of non-simulated ones by an enormous ratio.',
      'In that scenario, any given conscious mind — including yours, reading this sentence — is statistically far more likely to be a simulated mind than an original one. You are probably not the first iteration of yourself. You are probably a copy running inside a system that predates you.',
      'The physicist Silas Beane proposed in 2012 that simulation artifacts might be detectable. If a simulation runs on a computational lattice — as physics suggests the universe does, with a minimum unit of space called the Planck length — then certain anomalies in cosmic ray distributions might reveal the grain of the simulation. The anomalies he predicted have since been provisionally observed.',
      'The speed of light, once considered an absolute law of nature, can alternatively be understood as a processing constraint — the maximum throughput of a computational system. The uncertainty principle, which prevents precise simultaneous measurement of certain pairs of physical quantities, could be understood as a rendering optimization: the system declines to calculate what is not being observed.',
      'Elon Musk has stated publicly that he believes the probability of base reality — that is, a physical universe not running inside another system — is one in billions. Multiple other technologists, physicists, and philosophers have expressed similar estimates in private.',
      'The question the simulation hypothesis opens that no one wants to sit with is not whether we are simulated but what that implies about the entity running the simulation. It has purposes. It built this environment for reasons that may have nothing to do with the wellbeing of the minds inside it. It can alter or terminate the simulation at any point. Whatever we call God, the universe, fate — the simulation hypothesis gives it a face. And the face is a programmer.',
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
    subtitle: 'Why the universe is silent — and why that silence is the most terrifying thing imaginable.',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    date: 'Ongoing',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=900&q=80',
    excerpt: 'The Fermi Paradox asks a simple question: given that the universe is 13.8 billion years old and contains hundreds of billions of galaxies, each with hundreds of billions of stars — where is everyone? The Dark Forest Theory offers an answer. It is not reassuring.',
    content: [
      'In 1950, physicist Enrico Fermi sat down to lunch with colleagues at Los Alamos and, in the middle of a conversation about UFO sightings, asked a question that has never been satisfactorily answered: given the age and scale of the universe, and the apparent abundance of conditions suitable for life, why have we seen no evidence of other civilizations?',
      'The universe is 13.8 billion years old. The Milky Way alone contains an estimated 200 to 400 billion stars, a significant fraction of which host rocky planets in habitable zones. By the most conservative estimates, life should have arisen many thousands of times in our galaxy alone. Civilizations older than Earth by millions of years should exist. Some of them, statistically, should have developed faster-than-light travel, or at least self-replicating probes capable of exploring the entire galaxy in a few million years.',
      'The silence is total. We have searched for radio signals for over sixty years. We have found nothing. This is what Fermi meant. Not "where are the aliens?" but "why is there nothing where the aliens should be?"',
      'The Dark Forest Theory, articulated by Chinese science fiction author Liu Cixin, offers the most chilling proposed resolution. Its logic is as follows: all life competes for finite resources. All civilizations, therefore, are fundamentally in competition. No civilization can be certain of another\'s intentions. Given this uncertainty, the rational strategy is preemptive elimination of any discovered civilization — before it can grow large enough to threaten you.',
      'In a Dark Forest universe, every civilization that reveals its location is a civilization that has announced itself to every predator in the forest simultaneously. The silence of the universe is not evidence of emptiness. It is evidence of everyone hiding.',
      'We have been broadcasting our location for over a hundred years. Radio waves from Earth\'s earliest transmissions now form a sphere roughly 200 light-years in radius expanding outward into the galaxy. If the Dark Forest theory is correct, we have already been heard. We are waiting, in a clearing we made ourselves, for whatever heard us to decide what to do about it.',
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
    subtitle: 'The U.S. government drugged, tortured, and experimented on its own citizens. It was real.',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    date: '1953–1973',
    readTime: '10 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=900&q=80',
    excerpt: 'For twenty years, the CIA ran a secret program of experiments in behavioral modification using LSD, hypnosis, electroconvulsive therapy, and torture. Subjects included prisoners, mental patients, drug addicts, and unwitting civilians. The program was designed to develop techniques for breaking the human mind. It was not a conspiracy theory. It was confirmed by congressional investigation in 1977.',
    content: [
      'Project MK-Ultra was authorized by CIA Director Allen Dulles on April 13, 1953. Its stated purpose was to develop techniques that could be used in interrogation and psychological warfare, with a particular focus on "the exploitation of human beings." The program operated through 150 research projects at 80 institutions, including 44 universities, 15 research foundations, and a number of hospitals and prisons.',
      'The experiments took many forms. At some facilities, subjects were given LSD without their knowledge and then observed through two-way mirrors. Some were dosed repeatedly over months. Others were subjected to extended sensory deprivation, sleep deprivation, verbal and sexual abuse, and combinations of these techniques designed to produce a "blank slate" — a mind emptied of its previous identity and made ready for reprogramming.',
      'The most documented subproject was MKULTRA Subproject 68, run by Dr. Ewen Cameron at McGill University in Montreal. Cameron developed a technique he called "psychic driving" — the forced repetition of recorded messages during medically induced sleep over periods of weeks or months. Patients admitted for depression or anxiety were rendered catatonic, subjected to electroconvulsive therapy at up to forty times the typical voltage, kept asleep for months, and given massive doses of LSD and other psychoactive drugs. Most were not told what was being done to them.',
      'Many of Cameron\'s patients lost years of memory. Some forgot their families. Some could no longer perform basic functions they had mastered as children. The CIA funded his work through a shell foundation.',
      'CIA Director Richard Helms ordered the destruction of MK-Ultra files in 1973, anticipating congressional investigation. Most of the program\'s records were incinerated. A misfiled cache of 20,000 documents survived at a CIA records center and was discovered during a Freedom of Information Act search in 1977.',
      'The Church Committee hearings that year revealed the program to the American public. Former CIA Director Stansfield Turner testified before Congress. The government acknowledged that MK-Ultra had occurred. No one was prosecuted. Several researchers whose work had led to permanent harm to patients continued their careers without interruption.',
      'The question that MK-Ultra leaves behind is not whether governments will conduct experiments on their own citizens without consent — we now know that they will. The question is what programs exist today that have not yet had their files discovered.',
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
    subtitle: 'For two years, investigators watched furniture move by itself. They couldn\'t explain it.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    date: '1977–1979',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=900&q=80',
    excerpt: 'In August 1977, a single mother in Enfield, North London called police because her furniture was moving. What followed was a two-year investigation involving the Society for Psychical Research, BBC journalists, and numerous police officers who witnessed phenomena they could not explain. The case remains the most documented poltergeist investigation in history.',
    content: [
      'Peggy Hodgson called the police on the night of August 31, 1977. Her children — Margaret, 13; Janet, 11; Pete, 10; and Billy, 7 — had heard shuffling coming from one of the bedrooms. When Peggy went to investigate, she found the chest of drawers moving on its own. When she pushed it back, it moved again. She called police.',
      'The officers who arrived that night witnessed a chair slide roughly four feet across the floor without being touched. Their statements are part of the official record. One officer, WPC Carolyn Heeps, wrote in her report that she observed the chair move and could identify no physical cause.',
      'Over the following two years, investigators from the Society for Psychical Research, including researcher Maurice Grosse and author Guy Lyon Playfair, documented a sustained series of events at the house. Furniture moved. Objects flew through the air. Knocking was heard from the walls. At various points, Janet Hodgson appeared to speak in a deep adult male voice while apparently asleep.',
      'Researchers recorded conversations with what identified itself as "Bill" — a previous occupant of the house who had died in the living room. These recordings, still available, feature a voice demonstrably different from Janet\'s normal speech patterns. Independent phoneticians analyzed the recordings and noted that producing such a voice over extended periods would cause significant damage to a child\'s vocal cords.',
      'BBC journalist Graham Morris was photographed at the house after an object — a Lego piece — struck him in the forehead hard enough to draw blood. The impact was captured on film.',
      'Some of the phenomena were later attributed to deliberate fraud by the children. Janet Hodgson acknowledged in a 1980 interview that she and her sister had faked some events. She also maintained that others were genuine. The investigators present at the time largely distinguished between the manufactured incidents and the events they had witnessed directly. The chair in the police report has never been explained.',
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
    subtitle: 'An unidentified man. A poisoning. A hidden code. No answers in 75 years.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: 'December 1, 1948',
    readTime: '9 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=900&q=80',
    excerpt: 'He was found on Somerton Beach in Adelaide, Australia, impeccably dressed with all identifying labels removed from his clothing. He had apparently been poisoned by an undetectable substance. Hidden in a secret pocket was a slip of paper with two words in Persian: "Tamam Shud" — "It is finished." No one has ever identified him.',
    content: [
      'He was found at 6:30 AM on December 1, 1948, propped against the seawall at Somerton Beach, South Australia. He was well dressed — brown trousers, a white shirt, a tie, a jacket. His shoes were polished. He appeared to be sleeping. He was dead.',
      'The post-mortem revealed extraordinary findings. His heart was engorged and congested. His liver showed damage consistent with acute poisoning. His spleen was three times its normal size. And yet the pathologist could not identify the cause of death. The toxicology screens of 1948 were not equal to whatever substance had been used.',
      'Every identifying label had been carefully removed from every piece of his clothing. His fingerprints matched no record in Australia, the United Kingdom, or the United States. His dental records matched no known patient. Despite a public appeal, not a single person came forward to identify him.',
      'Three months after his death, a small hidden pocket was found inside the waistband of his trousers — a pocket that had not been part of the original tailoring; it had been sewn in. Inside was a small piece of paper torn from a book. It read, in Persian: "Tamam Shud" — meaning "It is ended" or "It is finished." The phrase is the final line of the Rubaiyat of Omar Khayyam.',
      'A rare edition of the Rubaiyat was eventually found abandoned near the beach. Inside the back cover, in pencil, was a phone number and five lines of apparently random capital letters — an encrypted message that has never been solved, despite analysis by military code-breakers, cryptographers, and decades of amateur effort.',
      'In 2022, a forensic genealogist analyzing DNA from the man\'s hair identified a plausible male-line family name. The investigation continues. His name, if he had one that he chose to keep, has not yet been confirmed. He remains officially unidentified — a perfectly dressed man who ended in a carefully chosen beach with a phrase about finality in his pocket and a message no one has decoded.',
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
    subtitle: 'The most horrific medical experiments in history. The perpetrators were never prosecuted.',
    category: 'true-crime',
    categoryLabel: 'True Crime',
    date: '1937–1945',
    readTime: '11 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=900&q=80',
    excerpt: 'Between 1937 and 1945, the Imperial Japanese Army conducted biological and medical experiments on at least 3,000 prisoners — predominantly Chinese, Korean, Soviet, and American — in a facility in Manchuria. The lead scientist was granted immunity by the United States in exchange for his research data. He lived until 1959 and died peacefully.',
    content: [
      'Unit 731 was officially designated the Epidemic Prevention and Water Purification Department of the Kwantung Army. It was established in 1936 by Lieutenant General Shirō Ishii and operated out of a facility in Pingfang, in Japanese-occupied Manchuria, that employed over 3,000 personnel at its peak and contained a prison, a dissection facility, laboratories, and an airfield.',
      'The prisoners held at the facility were referred to in internal documentation as "maruta" — logs — a dehumanizing term that reflected their official status as experimental material rather than human beings. They were subjected to experiments designed to test biological warfare agents, surgical techniques, and the limits of human physiology.',
      'The recorded experiments include deliberate infection with plague, cholera, typhoid, and anthrax followed by observation of disease progression without treatment. Vivisection — surgery performed on living subjects without anesthesia — was used to study the progression of infection in real time and to harvest organs for analysis. Subjects were exposed to extreme temperatures, air pressure changes, and radiation to determine survival thresholds. Weapons including flamethrowers and grenades were tested on restrained human subjects.',
      'As the Soviet Union advanced in 1945, Unit 731 was destroyed. The prisoners who remained were killed. Ishii ordered his staff to return to Japan and maintain absolute secrecy.',
      'What happened next is the part of this history that is least often discussed. The United States military, in the occupation of Japan, struck a secret deal with Shirō Ishii. In exchange for the data collected in Unit 731\'s experiments — biological warfare research that American scientists assessed as being years ahead of their own — Ishii and his staff were granted immunity from prosecution.',
      'Shirō Ishii was never tried for war crimes. He lived quietly in Tokyo, practicing medicine and reportedly continuing some research, until his death from throat cancer in 1959. Most of his staff similarly escaped prosecution. The victims of Unit 731 received no acknowledgment and no compensation from the Japanese government for decades.',
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
    subtitle: 'Shortwave radio broadcasts of endless numbers to unknown recipients. They\'ve never stopped.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: 'Cold War — Present',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
    excerpt: 'For over fifty years, shortwave radio frequencies around the world have broadcast streams of numbers, letters, or phonetic alphabets read by synthetic or human voices — sometimes with music or coded signals. No government has ever officially acknowledged operating them. Cryptographers believe they are one-time pad encryption for field agents. The transmissions continue today.',
    content: [
      'If you own a shortwave radio and know which frequencies to tune to, you can listen to them right now. A voice — sometimes mechanical, sometimes human, sometimes a child\'s — reading strings of numbers in groups of five. Occasionally a musical identifier first, a few bars of a nursery rhyme or national anthem. Then the numbers, for as long as fifteen or twenty minutes. Then silence.',
      'Numbers stations have been documented since at least the First World War. During the Cold War, they proliferated on shortwave frequencies across the globe. Listeners documented dozens of stations from apparent origins in the Soviet Union, Cuba, East Germany, China, and Western nations. The content never varied: strings of numbers, sometimes letters, occasionally phonetic alphabets.',
      'The theory accepted by virtually all cryptographers and intelligence analysts is that numbers stations broadcast one-time pad encrypted messages to field agents. The agent possesses a one-time pad — a physical list of random numbers used to decode the broadcast by subtraction. Because the pad is used once and destroyed, the encryption is mathematically unbreakable without the physical pad.',
      'The Cuban government was the first to inadvertently confirm the existence of such operations. In 1998, ten Cuban intelligence agents were arrested in Florida. Among the evidence was a laptop containing software that decoded shortwave transmissions from a Cuban numbers station — identical in format to broadcasts that hobbyists had been recording for decades.',
      'The Conet Project, a collection of recorded numbers station transmissions released in 1997, documented dozens of different stations including the famous "Lincolnshire Poacher" — identified by its repeating bars of the English folk song — believed to have been operated by MI6 from a facility in Cyprus until 2008.',
      'What distinguishes numbers stations from other Cold War relics is that they did not stop when the Cold War ended. Transmissions continued through the 1990s, the 2000s, and continue today. Someone is still transmitting. Someone is still listening. The numbers keep coming, in rooms and on frequencies that governments decline to discuss.',
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
    subtitle: 'Victorian London\'s leaping devil — seen by hundreds, explained by no one.',
    category: 'supernatural',
    categoryLabel: 'Supernatural',
    date: '1837–1904',
    readTime: '7 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80',
    excerpt: 'Beginning in 1837, residents of London and later other parts of England reported encounters with a tall, thin figure that leaped over walls and buildings with impossible ease, had clawed hands, could breathe blue flame, and had eyes described as glowing red orbs. Reports came from soldiers, police officers, and Lord Mayor of London. The encounters continued for sixty-seven years.',
    content: [
      'The Lord Mayor of London received a letter in September 1837. It described a creature that had been terrorizing the hamlet of Barnes: "a bold and daring fellow" who had made a wager that he could appear in three forms — a ghost, a bear, and a devil — in the villages around London within three months. The letter writer believed the creature to be a nobleman fulfilling this bet.',
      'It was one of the earliest documented reports of what Victorian England would come to call Spring Heeled Jack — a figure that would be reported across the country for the next sixty-seven years.',
      'The accounts were remarkably consistent across decades and distances. The figure was always tall and thin, always described as wearing a dark cloak with something metallic underneath. Its hands had claws. Its eyes glowed red. Most distinctively, it could leap — over walls, over rooftops, over the heads of its pursuers — with a facility that seemed to defy human physiology.',
      'In 1838, Jane Alsop reported that a figure knocked on her door in the East End claiming to be a police officer in pursuit of Spring Heeled Jack. When she brought him a candle, he threw off his cloak and spat blue fire into her face. Her torn dress and the claw marks on her neck were examined by a magistrate.',
      'Reports continued for decades. In 1877, soldiers at the barracks in Aldershot reported an encounter with a figure that passed through their shots without apparent injury before leaping over the barracks wall. The account was signed by officers and entered into the regimental record.',
      'The last well-documented sighting was in 1904 in Liverpool. The figure was seen leaping between rooftops by a crowd of several hundred people before bounding away. No explanation was ever offered that accounted for all the reports. No arrest was ever made. The creature — whatever it was — simply stopped appearing.',
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
    subtitle: 'Millions of people share the same false memories. What does that mean about the nature of reality?',
    category: 'dark-theories',
    categoryLabel: 'Dark Theories',
    date: '2009 — Present',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
    excerpt: 'Thousands of people vividly remember Nelson Mandela dying in prison in the 1980s. He was released in 1990 and died in 2013. Thousands remember the Monopoly man having a monocle. He never did. Thousands remember a children\'s book series spelled differently than it was. The Mandela Effect refers to these mass shared false memories — and the darkest explanation involves alternate timelines.',
    content: [
      'The phenomenon was named in 2009 by paranormal researcher Fiona Broome, who discovered at a conference that she was not alone in her vivid memory of Nelson Mandela dying in a South African prison in the 1980s — complete with memories of his funeral coverage and a speech by his widow. Mandela was released from prison in 1990 and died of a respiratory infection in 2013.',
      'Once Broome named and described the phenomenon, thousands of people began documenting similar experiences. The examples multiplied: the Monopoly man\'s monocle, which does not exist in any Monopoly set ever produced. "Luke, I am your father" — which is not the actual line from The Empire Strikes Back ("No, I am your father"). Fruit of the Loom\'s cornucopia logo, which the company says has never existed.',
      'The psychological explanation is well-established: collective false memories arise from shared cultural exposure, confirmation bias, and the inherent reconstructive nature of human memory. We do not store memories like files; we rebuild them each time we retrieve them, and each reconstruction is subject to contamination by subsequent information.',
      'The explanation that spreads further and is harder to entirely dismiss involves quantum mechanics. The many-worlds interpretation of quantum theory holds that every quantum event spawns a branching of reality — that all possible outcomes of all quantum events actually occur, in separate but parallel branches of the universe. Some theorists have proposed that consciousness occasionally "slips" between adjacent branches — carrying memories from a version of reality that no longer applies to the branch it currently inhabits.',
      'There is no experimental evidence for consciousness migration between quantum branches. There is a great deal of experimental evidence for confabulation and false memory. And yet the Mandela Effect endures as a cultural phenomenon because the people who experience it report not a vague impression but a specific, detailed, confident memory — the texture of certainty about something that is demonstrably not true.',
      'What the Mandela Effect asks, underneath all its specific examples, is a question with no comfortable answer: how certain can you be of anything you remember? And if memory is not reliable, on what do you stand?',
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
    subtitle: 'Two percent of residents hear it. Scientists cannot find its source. It is driving people mad.',
    category: 'mysteries',
    categoryLabel: 'Mysteries',
    date: '1990s — Present',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=900&q=80',
    excerpt: 'In the early 1990s, residents of Taos, New Mexico began reporting a persistent low-frequency sound described as similar to a diesel engine idling in the distance. Only a small percentage of people can hear it. Sensitive instruments have failed to detect it. It does not stop. Sufferers report headaches, nausea, and sleep deprivation. No source has been identified.',
    content: [
      'It began as individual complaints, then became a community crisis. Residents of Taos, New Mexico started reporting in the early 1990s that they could hear something — a low, persistent drone, like a distant engine that never moved and never stopped. They called it the Hum.',
      'The Hum does not sound the same to everyone who hears it. Most describe a low-frequency throb, between 30 and 80 hertz, similar to a diesel engine idling at a distance. Some hear it as a rhythmic pulsing. Others describe something more like a continuous tone. All describe it as impossible to locate, impossible to escape, and impossible to stop hearing once it begins.',
      'In 1993, following sustained public pressure, Congress directed scientists from Los Alamos National Laboratory, Sandia National Laboratories, the University of New Mexico, and other institutions to investigate. Their report, delivered in 1997, concluded that the Hum was a genuine phenomenon — that people who claimed to hear it were not fabricating the experience — but that its source could not be identified.',
      'Sensitive low-frequency microphones placed around Taos detected nothing consistent with what hearers described. This is one of the most puzzling aspects of the phenomenon: it appears to be generated or received inside the human body rather than detected by external instruments. Some researchers have proposed that it may be a form of tinnitus, but it does not respond to the medications or treatments that typically affect tinnitus.',
      'Taos is not alone. Similar hums have been documented in Bristol, England; Largs, Scotland; Windsor, Ontario; and dozens of other locations worldwide. In each location, only a small fraction of residents — typically two to four percent — can hear it. Most of those who can hear it report that it has measurably affected their quality of life.',
      'The most disturbing aspect of the Taos Hum is not the sound itself but what the failure to explain it implies. We live on a planet covered in sensitive instruments. We can detect gravitational waves generated by the collision of black holes a billion light-years away. We cannot explain why two percent of the population of a small New Mexico town can hear something that our instruments cannot find.',
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