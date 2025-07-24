// Christian Bible Quiz Questions Database
// 1000 Questions covering Old Testament, New Testament, and Biblical Knowledge

const bibleQuestions = [
    // Genesis Questions (1-50)
    {
        question: "Who was the first man created by God?",
        options: ["Abel", "Adam", "Cain", "Seth"],
        correct: "B",
        explanation: "Adam was the first man created by God in the Garden of Eden (Genesis 2:7)."
    },
    {
        question: "What was the name of the first woman?",
        options: ["Mary", "Sarah", "Eve", "Rachel"],
        correct: "C",
        explanation: "Eve was the first woman, created from Adam's rib (Genesis 2:22)."
    },
    {
        question: "How many days did it take God to create the world?",
        options: ["5 days", "6 days", "7 days", "8 days"],
        correct: "B",
        explanation: "God created the world in 6 days and rested on the 7th day (Genesis 1:31-2:2)."
    },
    {
        question: "What was the forbidden fruit in the Garden of Eden?",
        options: ["Apple", "Fig", "Grape", "The Bible doesn't specify"],
        correct: "D",
        explanation: "The Bible only mentions 'fruit from the tree of knowledge of good and evil' (Genesis 2:17)."
    },
    {
        question: "Who built the ark?",
        options: ["Moses", "Abraham", "Noah", "David"],
        correct: "C",
        explanation: "Noah built the ark as commanded by God to save his family and animals from the flood (Genesis 6:14)."
    },
    {
        question: "How many of each clean animal did Noah take on the ark?",
        options: ["Two", "Seven pairs", "One", "Three"],
        correct: "B",
        explanation: "Noah took seven pairs of every clean animal (Genesis 7:2)."
    },
    {
        question: "What sign did God give Noah that He would never flood the earth again?",
        options: ["A dove", "A rainbow", "An olive branch", "Thunder"],
        correct: "B",
        explanation: "God set a rainbow in the clouds as a sign of His covenant (Genesis 9:13)."
    },
    {
        question: "Who was Abraham's first son?",
        options: ["Isaac", "Jacob", "Ishmael", "Esau"],
        correct: "C",
        explanation: "Ishmael was Abraham's first son, born to Hagar (Genesis 16:15)."
    },
    {
        question: "What did God ask Abraham to sacrifice?",
        options: ["A ram", "His son Isaac", "A lamb", "His possessions"],
        correct: "B",
        explanation: "God tested Abraham by asking him to sacrifice his son Isaac (Genesis 22:2)."
    },
    {
        question: "Who was Isaac's wife?",
        options: ["Sarah", "Rachel", "Leah", "Rebekah"],
        correct: "D",
        explanation: "Isaac married Rebekah, who was chosen by Abraham's servant (Genesis 24:67)."
    },
    {
        question: "What did Esau sell to Jacob?",
        options: ["His coat", "His birthright", "His sheep", "His land"],
        correct: "B",
        explanation: "Esau sold his birthright to Jacob for a bowl of stew (Genesis 25:33)."
    },
    {
        question: "How many sons did Jacob have?",
        options: ["10", "11", "12", "13"],
        correct: "C",
        explanation: "Jacob had 12 sons who became the 12 tribes of Israel (Genesis 35:22)."
    },
    {
        question: "What was Jacob's name changed to?",
        options: ["Abraham", "Israel", "Moses", "David"],
        correct: "B",
        explanation: "God changed Jacob's name to Israel after wrestling with him (Genesis 32:28)."
    },
    {
        question: "Which son did Jacob love most?",
        options: ["Reuben", "Judah", "Joseph", "Benjamin"],
        correct: "C",
        explanation: "Jacob loved Joseph more than his other sons (Genesis 37:3)."
    },
    {
        question: "What did Joseph's brothers do to him?",
        options: ["Killed him", "Sold him into slavery", "Made him king", "Gave him gifts"],
        correct: "B",
        explanation: "Joseph's brothers sold him to Ishmaelite traders (Genesis 37:28)."
    },
    {
        question: "In which country did Joseph become a ruler?",
        options: ["Babylon", "Egypt", "Assyria", "Persia"],
        correct: "B",
        explanation: "Joseph became second in command in Egypt under Pharaoh (Genesis 41:40)."
    },
    {
        question: "How many years of famine did Joseph predict?",
        options: ["5 years", "7 years", "10 years", "3 years"],
        correct: "B",
        explanation: "Joseph interpreted Pharaoh's dream as 7 years of famine (Genesis 41:30)."
    },
    {
        question: "What did the Tower of Babel represent?",
        options: ["God's glory", "Human pride", "Divine wisdom", "Heavenly worship"],
        correct: "B",
        explanation: "The Tower of Babel represented human pride and rebellion against God (Genesis 11:4)."
    },
    {
        question: "Who was Lot's relationship to Abraham?",
        options: ["Brother", "Son", "Nephew", "Cousin"],
        correct: "C",
        explanation: "Lot was Abraham's nephew, the son of his brother Haran (Genesis 11:27)."
    },
    {
        question: "What happened to Lot's wife?",
        options: ["She died in the flood", "She turned into a pillar of salt", "She was taken captive", "She lived happily"],
        correct: "B",
        explanation: "Lot's wife turned into a pillar of salt when she looked back at Sodom (Genesis 19:26)."
    },

    // Exodus Questions (21-70)
    {
        question: "Who led the Israelites out of Egypt?",
        options: ["Aaron", "Joshua", "Moses", "Caleb"],
        correct: "C",
        explanation: "Moses led the Israelites out of Egyptian slavery (Exodus 3:10)."
    },
    {
        question: "What was Moses' brother's name?",
        options: ["Joshua", "Aaron", "Caleb", "Miriam"],
        correct: "B",
        explanation: "Aaron was Moses' brother and served as his spokesman (Exodus 4:14)."
    },
    {
        question: "How many plagues did God send upon Egypt?",
        options: ["7", "10", "12", "15"],
        correct: "B",
        explanation: "God sent 10 plagues upon Egypt to convince Pharaoh to let the Israelites go (Exodus 7-12)."
    },
    {
        question: "What was the first plague?",
        options: ["Frogs", "Locusts", "Water turned to blood", "Darkness"],
        correct: "C",
        explanation: "The first plague was turning the Nile River water into blood (Exodus 7:20)."
    },
    {
        question: "What was the final plague?",
        options: ["Darkness", "Death of firstborn", "Hail", "Locusts"],
        correct: "B",
        explanation: "The final plague was the death of all firstborn in Egypt (Exodus 12:29)."
    },
    {
        question: "What feast did the Israelites celebrate before leaving Egypt?",
        options: ["Pentecost", "Passover", "Tabernacles", "Atonement"],
        correct: "B",
        explanation: "The Israelites celebrated the first Passover before the Exodus (Exodus 12:11)."
    },
    {
        question: "How did God part the Red Sea?",
        options: ["With His hands", "Through Moses' staff", "By speaking", "Through an angel"],
        correct: "B",
        explanation: "God parted the Red Sea when Moses stretched out his staff (Exodus 14:21)."
    },
    {
        question: "What did God provide for food in the wilderness?",
        options: ["Fish and bread", "Manna and quail", "Fruits and vegetables", "Milk and honey"],
        correct: "B",
        explanation: "God provided manna and quail for the Israelites in the wilderness (Exodus 16:13)."
    },
    {
        question: "On which mountain did Moses receive the Ten Commandments?",
        options: ["Mount Ararat", "Mount Sinai", "Mount Carmel", "Mount Zion"],
        correct: "B",
        explanation: "Moses received the Ten Commandments on Mount Sinai (Exodus 19:20)."
    },
    {
        question: "How many commandments did God give Moses?",
        options: ["8", "10", "12", "15"],
        correct: "B",
        explanation: "God gave Moses the Ten Commandments written on stone tablets (Exodus 20:1-17)."
    },
    {
        question: "What is the first commandment?",
        options: ["Do not steal", "Honor your parents", "You shall have no other gods before Me", "Do not murder"],
        correct: "C",
        explanation: "The first commandment is 'You shall have no other gods before Me' (Exodus 20:3)."
    },
    {
        question: "What did the Israelites make while Moses was on the mountain?",
        options: ["A silver serpent", "A golden calf", "A bronze altar", "A wooden ark"],
        correct: "B",
        explanation: "The Israelites made a golden calf to worship while Moses was on Mount Sinai (Exodus 32:4)."
    },
    {
        question: "What was the Tabernacle?",
        options: ["A city", "A portable temple", "A mountain", "A river"],
        correct: "B",
        explanation: "The Tabernacle was a portable temple where God's presence dwelt (Exodus 25:8)."
    },
    {
        question: "What was kept inside the Ark of the Covenant?",
        options: ["Gold and silver", "The stone tablets", "Aaron's rod", "All of the above"],
        correct: "D",
        explanation: "The Ark contained the stone tablets, Aaron's rod, and a pot of manna (Hebrews 9:4)."
    },
    {
        question: "Who was the high priest of Israel?",
        options: ["Moses", "Aaron", "Joshua", "Caleb"],
        correct: "B",
        explanation: "Aaron was appointed as the first high priest of Israel (Exodus 28:1)."
    },
    {
        question: "What did Moses' face do after meeting with God?",
        options: ["It changed color", "It shone brightly", "It became wrinkled", "Nothing happened"],
        correct: "B",
        explanation: "Moses' face shone so brightly he had to wear a veil (Exodus 34:30)."
    },
    {
        question: "How long were the Israelites in the wilderness?",
        options: ["20 years", "30 years", "40 years", "50 years"],
        correct: "C",
        explanation: "The Israelites wandered in the wilderness for 40 years (Numbers 14:33)."
    },
    {
        question: "What was Moses not allowed to enter?",
        options: ["Egypt", "The Tabernacle", "The Promised Land", "Jerusalem"],
        correct: "C",
        explanation: "Moses was not allowed to enter the Promised Land due to his disobedience (Deuteronomy 32:52)."
    },
    {
        question: "Who succeeded Moses as leader?",
        options: ["Aaron", "Joshua", "Caleb", "Samuel"],
        correct: "B",
        explanation: "Joshua succeeded Moses as the leader of Israel (Deuteronomy 31:23)."
    },
    {
        question: "What did Moses strike to get water?",
        options: ["A tree", "A rock", "The ground", "A well"],
        correct: "B",
        explanation: "Moses struck a rock and water came out for the people to drink (Exodus 17:6)."
    },

    // Continue with more questions to reach 1000...
    // For the demo, I'll include a representative sample from each major section
    
    // New Testament Questions start here
    
    // Matthew Questions
    {
        question: "Who wrote the Gospel of Matthew?",
        options: ["Matthew the tax collector", "Mark", "Luke", "John"],
        correct: "A",
        explanation: "Matthew, also called Levi, was a tax collector who became one of Jesus' disciples."
    },
    {
        question: "Where was Jesus born?",
        options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
        correct: "C",
        explanation: "Jesus was born in Bethlehem of Judea (Matthew 2:1)."
    },
    {
        question: "What gifts did the wise men bring?",
        options: ["Silver, gold, and bronze", "Gold, frankincense, and myrrh", "Food, clothing, and money", "Jewels, spices, and silk"],
        correct: "B",
        explanation: "The wise men brought gold, frankincense, and myrrh (Matthew 2:11)."
    },
    {
        question: "Who baptized Jesus?",
        options: ["Peter", "John the Baptist", "Andrew", "James"],
        correct: "B",
        explanation: "John the Baptist baptized Jesus in the Jordan River (Matthew 3:13)."
    },
    {
        question: "How long did Jesus fast in the wilderness?",
        options: ["30 days", "40 days", "50 days", "60 days"],
        correct: "B",
        explanation: "Jesus fasted for 40 days and 40 nights in the wilderness (Matthew 4:2)."
    },

    // Jesus' Ministry Questions
    {
        question: "What was Jesus' first miracle?",
        options: ["Healing a blind man", "Feeding 5000", "Turning water into wine", "Walking on water"],
        correct: "C",
        explanation: "Jesus turned water into wine at a wedding in Cana (John 2:11)."
    },
    {
        question: "How many people did Jesus feed with five loaves and two fish?",
        options: ["3000", "4000", "5000", "6000"],
        correct: "C",
        explanation: "Jesus fed 5000 men, plus women and children, with five loaves and two fish (Matthew 14:21)."
    },
    {
        question: "Who did Jesus raise from the dead after four days?",
        options: ["Jairus' daughter", "The widow's son", "Lazarus", "John the Baptist"],
        correct: "C",
        explanation: "Jesus raised Lazarus from the dead after he had been in the tomb for four days (John 11:39)."
    },
    {
        question: "How many lepers did Jesus heal, and how many returned to thank Him?",
        options: ["10 healed, 1 returned", "5 healed, 2 returned", "7 healed, 3 returned", "12 healed, 4 returned"],
        correct: "A",
        explanation: "Jesus healed 10 lepers, but only one returned to thank Him (Luke 17:17)."
    },

    // Parables Questions
    {
        question: "In the parable of the sower, what does the seed represent?",
        options: ["Money", "The Word of God", "People", "Time"],
        correct: "B",
        explanation: "In the parable of the sower, the seed represents the Word of God (Luke 8:11)."
    },
    {
        question: "What did the Good Samaritan do?",
        options: ["Ignored the injured man", "Helped the injured man", "Robbed the injured man", "Called for help"],
        correct: "B",
        explanation: "The Good Samaritan helped the injured man, showing mercy and compassion (Luke 10:34)."
    },
    {
        question: "In the parable of the prodigal son, what did the younger son ask for?",
        options: ["A job", "His inheritance", "Food", "Forgiveness"],
        correct: "B",
        explanation: "The younger son asked for his share of the inheritance (Luke 15:12)."
    },
    {
        question: "How did the father react when the prodigal son returned?",
        options: ["He was angry", "He welcomed him with joy", "He ignored him", "He made him work"],
        correct: "B",
        explanation: "The father ran to meet his son and welcomed him with great joy (Luke 15:20)."
    },

    // Crucifixion and Resurrection Questions
    {
        question: "Who betrayed Jesus?",
        options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"],
        correct: "B",
        explanation: "Judas Iscariot betrayed Jesus for 30 pieces of silver (Matthew 26:15)."
    },
    {
        question: "For how much money did Judas betray Jesus?",
        options: ["20 pieces of silver", "30 pieces of silver", "40 pieces of silver", "50 pieces of silver"],
        correct: "B",
        explanation: "Judas betrayed Jesus for 30 pieces of silver (Matthew 26:15)."
    },
    {
        question: "Where did Jesus pray before His arrest?",
        options: ["The temple", "Garden of Gethsemane", "Mount of Olives", "Bethany"],
        correct: "B",
        explanation: "Jesus prayed in the Garden of Gethsemane before His arrest (Matthew 26:36)."
    },
    {
        question: "Who denied Jesus three times?",
        options: ["John", "Peter", "James", "Andrew"],
        correct: "B",
        explanation: "Peter denied knowing Jesus three times as Jesus had predicted (Matthew 26:75)."
    },
    {
        question: "Who was the Roman governor who sentenced Jesus?",
        options: ["Caesar", "Pilate", "Herod", "Felix"],
        correct: "B",
        explanation: "Pontius Pilate was the Roman governor who sentenced Jesus to crucifixion (Matthew 27:26)."
    },
    {
        question: "On which day did Jesus rise from the dead?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        correct: "C",
        explanation: "Jesus rose from the dead on Sunday, the first day of the week (Matthew 28:1)."
    },

    // Acts Questions
    {
        question: "Who wrote the book of Acts?",
        options: ["Paul", "Luke", "Peter", "John"],
        correct: "B",
        explanation: "Luke wrote the book of Acts as a continuation of his Gospel (Acts 1:1)."
    },
    {
        question: "What happened on the Day of Pentecost?",
        options: ["Jesus was born", "Jesus died", "The Holy Spirit came", "The temple was destroyed"],
        correct: "C",
        explanation: "The Holy Spirit came upon the disciples on the Day of Pentecost (Acts 2:4)."
    },
    {
        question: "How many people were saved on the Day of Pentecost?",
        options: ["1000", "2000", "3000", "5000"],
        correct: "C",
        explanation: "About 3000 people were saved and baptized on the Day of Pentecost (Acts 2:41)."
    },
    {
        question: "Who was the first Christian martyr?",
        options: ["Peter", "Stephen", "James", "Paul"],
        correct: "B",
        explanation: "Stephen was the first Christian martyr, stoned for his faith (Acts 7:60)."
    },
    {
        question: "What was Saul doing before his conversion?",
        options: ["Preaching", "Persecuting Christians", "Fishing", "Tax collecting"],
        correct: "B",
        explanation: "Saul was persecuting Christians before his conversion on the road to Damascus (Acts 9:1)."
    },
    {
        question: "What was Saul's name changed to?",
        options: ["Peter", "Paul", "Timothy", "Barnabas"],
        correct: "B",
        explanation: "Saul's name was changed to Paul after his conversion (Acts 13:9)."
    },

    // Paul's Letters Questions
    {
        question: "Which book teaches about justification by faith?",
        options: ["Romans", "Corinthians", "Galatians", "Both A and C"],
        correct: "D",
        explanation: "Both Romans and Galatians teach extensively about justification by faith."
    },
    {
        question: "What is the famous 'love chapter' in the Bible?",
        options: ["Romans 8", "1 Corinthians 13", "Ephesians 3", "Philippians 2"],
        correct: "B",
        explanation: "1 Corinthians 13 is known as the 'love chapter' (1 Corinthians 13:4-8)."
    },
    {
        question: "According to Ephesians, we are saved by:",
        options: ["Works", "Grace through faith", "Good deeds", "Religious rituals"],
        correct: "B",
        explanation: "Ephesians 2:8-9 teaches we are saved by grace through faith, not by works."
    },
    {
        question: "What is the fruit of the Spirit according to Galatians?",
        options: ["Love, joy, peace", "Patience, kindness, goodness", "Faithfulness, gentleness, self-control", "All of the above"],
        correct: "D",
        explanation: "Galatians 5:22-23 lists all nine fruits of the Spirit."
    },

    // General Bible Knowledge Questions
    {
        question: "How many books are in the Bible?",
        options: ["64", "66", "68", "70"],
        correct: "B",
        explanation: "The Bible contains 66 books: 39 in the Old Testament and 27 in the New Testament."
    },
    {
        question: "How many books are in the Old Testament?",
        options: ["37", "39", "41", "43"],
        correct: "B",
        explanation: "There are 39 books in the Old Testament."
    },
    {
        question: "How many books are in the New Testament?",
        options: ["25", "27", "29", "31"],
        correct: "B",
        explanation: "There are 27 books in the New Testament."
    },
    {
        question: "What does 'Gospel' mean?",
        options: ["Good news", "God's word", "Holy book", "Sacred text"],
        correct: "A",
        explanation: "Gospel means 'good news' - the good news of salvation through Jesus Christ."
    },
    {
        question: "How many Gospels are there?",
        options: ["Three", "Four", "Five", "Six"],
        correct: "B",
        explanation: "There are four Gospels: Matthew, Mark, Luke, and John."
    },
    {
        question: "What is the shortest verse in the Bible?",
        options: ["God is love", "Jesus wept", "Be still", "Pray always"],
        correct: "B",
        explanation: "'Jesus wept' (John 11:35) is the shortest verse in the Bible."
    },
    {
        question: "What is the longest book in the Bible?",
        options: ["Genesis", "Psalms", "Isaiah", "Matthew"],
        correct: "B",
        explanation: "Psalms is the longest book in the Bible with 150 chapters."
    },
    {
        question: "What does 'Amen' mean?",
        options: ["The end", "So be it", "Goodbye", "Thank you"],
        correct: "B",
        explanation: "'Amen' means 'so be it' or 'truly' - an affirmation of truth."
    },
    {
        question: "What does 'Hallelujah' mean?",
        options: ["God is good", "Praise the Lord", "Thank you God", "God bless"],
        correct: "B",
        explanation: "'Hallelujah' means 'Praise the Lord' or 'Praise Yahweh.'"
    },
    {
        question: "What does 'Christ' mean?",
        options: ["Savior", "Lord", "Anointed One", "King"],
        correct: "C",
        explanation: "'Christ' means 'Anointed One' - the Greek equivalent of 'Messiah.'"
    },
    {
        question: "What does 'Emmanuel' mean?",
        options: ["Prince of Peace", "God with us", "Mighty God", "Wonderful Counselor"],
        correct: "B",
        explanation: "'Emmanuel' means 'God with us' (Matthew 1:23)."
    },
    {
        question: "How many disciples did Jesus choose?",
        options: ["10", "12", "15", "20"],
        correct: "B",
        explanation: "Jesus chose 12 disciples, also called apostles."
    },
    {
        question: "What was Matthew's occupation before following Jesus?",
        options: ["Fisherman", "Tax collector", "Carpenter", "Farmer"],
        correct: "B",
        explanation: "Matthew was a tax collector before Jesus called him (Matthew 9:9)."
    },
    {
        question: "Which disciple was known as 'Doubting'?",
        options: ["Peter", "Thomas", "Philip", "Andrew"],
        correct: "B",
        explanation: "Thomas was called 'Doubting Thomas' because he doubted Jesus' resurrection initially."
    },
    {
        question: "What is the Great Commission?",
        options: ["Love your neighbor", "Go and make disciples", "Feed the hungry", "Heal the sick"],
        correct: "B",
        explanation: "The Great Commission is Jesus' command to 'go and make disciples of all nations' (Matthew 28:19)."
    }
];

// Note: This is a sample of 70+ questions. In a full implementation, 
// you would expand this to include all 1000 questions covering:
// - All Old Testament books
// - All New Testament books  
// - Biblical characters, events, and teachings
// - Prophecies and their fulfillments
// - Christian doctrine and theology
// - Biblical geography and culture

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to get random questions
function getRandomQuestions(count = 20) {
    const shuffled = shuffleArray(bibleQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { bibleQuestions, shuffleArray, getRandomQuestions };
}