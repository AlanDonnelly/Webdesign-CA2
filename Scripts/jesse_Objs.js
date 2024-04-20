// Jesse G: 23277815:
const INSTRUMENT_PRODUCTS_LIST = [
    {
      name: "Precision Bass",
      category: "Electric Bass",
      type: "4-string",
      brand: "Fender",
      color: "Blonde",
      price: 1200.00,
      description: "Classic Fender P Bass with 2 band controls and the Precision sound we have all come to expect over the last Sixty years. A stalwart classic, guaranteed to give you your fix!",
      img: "Images/Products/bass.png",
      // Image Reference: https://www.pexels.com/photo/close-up-shot-of-a-person-playing-an-electric-guitar-8044058/
      from: "USA"
    },
    {
      name: "Jazz Bass",
      category: "Electric Bass",
      type: "4-string",
      brand: "Fender",
      color: "Sunburst",
      price: 1200.00,
      description: "Classic Fender J Bass with 3 band eq and tone selector. The first and to many the best, the Jazz bass introduced by Leo Fender has been a mainstay since it's introduction in the late 1950s.",
      img: "Images/Products/jazz_bass.jpg",
      // Photo by Caleb Oquendo: https://www.pexels.com/photo/bass-guitar-on-tripod-against-musical-score-on-stage-7626333/
      from: "USA"
    },
    {
      name: "Jaguar",
      category: "Electric Bass",
      type: "5-string",
      brand: "Fender",
      color: "Black",
      price: 1200.00,
      description: "The modern classic that is the Fender Jaguar, with split and single coil pickups - versatility is the name of the game. From it Mastodon to Royal Blood the Jaguar is quickly becoming a mainstay in the electric bass pantheon",
      img: "Images/Products/jag_bass.jpg",
      // Photo by <a href="https://unsplash.com/@karishea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kari Shea</a> on <a href="https://unsplash.com/photos/white-and-black-electric-bass-guitar-on-white-surface-laHwVPkMTzY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      from: "USA"
    },
    {
      name: "StingRay",
      category: "Electric Bass",
      type: "4-string",
      brand: "MusicMan",
      color: "Seafoam Green",
      price: 1600.00,
      description: "The Ray! Music Man's classic bass offering, with their signature growl and popping high end, the Stingray is sure to delight even the most seasoned player with a distinct and unforgettable rumble.",
      img: "Images/Products/ray_bass.jpg",
      // Photo by <a href="https://unsplash.com/@polygon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Polygon Group</a> on <a href="https://unsplash.com/photos/black-and-white-stratocaster-electric-guitar-2kzOz1updNM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      from: "USA"
    },
    {
      name: "S.U.B Ray",
      category: "Electric Bass",
      type: "4-string",
      brand: "MusicMan",
      color: "Midnight Black",
      price: 350.00,
      description: "The little brother of the classic Stingray, the S.U.B Ray is much lauded as an affordable entry level offering for Music man enthusiasts who want the tone and power of the classic Ray but without the price tag!",
      img: "Images/Products/sub_bass.jpg",
      // Photo by <a href="https://unsplash.com/@ariksyam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ZAKI ARIK</a> on <a href="https://unsplash.com/photos/black-electric-guitar-on-black-and-white-textile-lJonRphb6Y4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      from: "China"
    },
    {
      name: "SR500",
      category: "Electric Bass",
      type: "4-string",
      brand: "Ibanez",
      color: "Natural",
      price: 550.00,
      description: "Ibanez are known for offering top of the line instruments at a surprisingly affordable rate. Enter the SR500, a powerehouse equally capable of ballad playing as it is laying down a funky groove!",
      img: "Images/Products/ibanez_bass.jpg",
      // Photo by <a href="https://unsplash.com/@polygon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Polygon Group</a> on <a href="https://unsplash.com/photos/red-electric-guitar-on-black-steel-stand-fd47bVxHzVc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      from: "China"
    },
    {
      name: "BB Series",
      category: "Electric Bass",
      type: "4-string",
      brand: "Yamaha",
      color: "Vintage White",
      price: 499.00,
      description: "Yamaha are a diverse company that makes quality their calling card, Yamaha's musical instrument department pride themselves on maintaining the standard of their well known and respected counterparts throughout Yamaha.",
      img: "Images/Products/thunderbird_bass.jpg",
      // Photo by <a href="https://unsplash.com/@duytung_tran?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Duy Tung Tran</a> on <a href="https://unsplash.com/photos/brown-and-white-electric-guitar-nauavwJLz6Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      from: "Japan"
    },
    {
        name: "Stratocaster",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Fender",
        color: "Sunburst",
        price: 1000.00,
        description: "The Strat! From Nile Rogers to Eric Clapton, if you are a lover of the guitar you've likely grooved out to a strat lick at least once or twice. Classic American Strats are hard to beat and known for their clean tone and versatility!",
        img: "Images/Products/strat.png",
        // 
        from: "USA"
      },
      {
        name: "Classic Vibes Telecaster",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Fender",
        color: "Butterscotch Blonde",
        price: 625.00,
        description: "Darn Tootin, country be as country does, and for sure the Fender Telecaster is as country as any offering you're likely to see from Leo Fender and Co. This mexican model represents fenders affordable starting point for high end instruments. A guaranteed hit for Cowpoke!",
        img: "Images/Products/tele_guit.jpg",
        // Photo by <a href="https://unsplash.com/@fdrandolfi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Felipe Randolfi</a> on <a href="https://unsplash.com/photos/white-and-brown-stratocaster-electric-guitar-vcRv5gr_cnI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "Mexico"
      },
      {
        name: "Jazzmaster",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Fender",
        color: "Olympic White",
        price: 1200.00,
        description: "The Jazzmaster has seen it's fair share of love and spectacle, a distinct and visual striking guitar. A unique piece, once must play the Jazzmaster to really understand just how much tone and quality is built right into this beautiful piece!  ",
        img: "Images/Products/jazz_guit.jpg",
        // Photo by <a href="https://unsplash.com/@polygon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Polygon Group</a> on <a href="https://unsplash.com/photos/black-and-white-stratocaster-electric-guitar-on-brown-sofa-oxMhZ1cQAIg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "Les Paul",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Gibson",
        color: "Standard Sunburst",
        price: 879.00,
        description: "One of the mainstays of the Rock music pantheon, it's hard to imagine a more imposing and commanding guitar from players like Slash and Jimmy Page, there can be no substitutes!",
        img: "Images/Products/gib_guit.jpg",
        // Photo by <a href="https://unsplash.com/@matthijssm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthijs Smit</a> on <a href="https://unsplash.com/photos/brown-and-red-epiphone-acoustic-guitar-N-VDzD5z71E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "SG Standard",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Gibson",
        color: "Cherry",
        price: 650.00,
        description: "AC/DC fans rejoice as the classic SG is here to set you on the path to rock music domination! Known for its clarity and lightness, this guitar is sure to bring the rockstar out of any aspiring musician!",
        img: "Images/Products/red_guit.jpg",
        // Photo by <a href="https://unsplash.com/@azevdoluana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luana Azevedo</a> on <a href="https://unsplash.com/photos/white-and-brown-stratocaster-electric-guitar-cHg5Eddb3LA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "ES 335",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Gibson",
        color: "Sunburst",
        price: 800.00,
        description: "The ES 335 offers any burgeoning Rockstars the chance to make their mark! With dynamic tone controls and a rosewood fingerboard it sure does sing!",
        img: "Images/Products/tobac_guit.jpg",
        // Photo by <a href="https://unsplash.com/@apolophotographer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Apolo Photographer</a> on <a href="https://unsplash.com/photos/brown-and-black-stratocaster-electric-guitar-xmksM4em7a0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "Masterbuilt",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Epiphone",
        color: "Nylon",
        price: 800.00,
        description: "The Epiphone Masterbuilt is a surefire entry point to high end gear for any would be hit maker! With an unrivalled build quality the Masterbuilt is unlike any other axe out there!",
        img: "Images/Products/master_guit.jpg",
        //Photo by <a href="https://unsplash.com/@charlesmollphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Charles Moll</a> on <a href="https://unsplash.com/photos/a-green-guitar-sitting-on-top-of-a-table-next-to-a-cup-of-coffee-0jj9tr8xes8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "China"
      },
      {
        name: "Dot with Bigsby",
        category: "Electric Guitar",
        type: "6-string",
        brand: "Epiphone",
        color: "Cherry",
        price: 650.00,
        description: "Hollow bodied and full of character the Dot with Bigbsy is hard to beat when looking for that high and lonesome sound, with distict furls and cones it is a magnificent guitar!",
        img: "Images/Products/dot_guit.jpg",
        //Photo by <a href="https://unsplash.com/@thkelley?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thomas Kelley</a> on <a href="https://unsplash.com/photos/electric-jazz-guitar-2ZWCDBuw1B8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "China"
      },
      {
        name: "Pearl Masters Birch",
        category: "Drum Kit",
        type: "Full Kit",
        brand: "Pearl",
        color: "Matte Black",
        price: 1200.00,
        description: "Pearl are one of the all time behemoths in the drumming space and this special Masters kit only solidifies Pearls place as one of the better drum manufacturers the world over!",
        img: "Images/Products/black_kit.jpg",
        // Photo by <a href="https://unsplash.com/@jasonpofahlphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Pofahl</a> on <a href="https://unsplash.com/photos/white-and-black-drum-set-_YPuAuP5btc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "China"
      },
      {
        name: "Pearl Masters Maple",
        category: "Drum Kit",
        type: "Full Kit",
        brand: "Pearl",
        color: "Candy Apple Red",
        price: 1100.00,
        description: "Pearl are one of the all time behemoths in the drumming space and this special Masters kit only solidifies Pearls place as one of the better drum manufacturers the world over!",
        img: "Images/Products/red_kit.jpg",
        // Photo by <a href="https://unsplash.com/@gabebarletta?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabriel Barletta</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-red-drum-set--lWcaUVJ39Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "China"
      },
      {
        name: "Ludwig Blue/Olive (Vintage)",
        category: "Drum Kit",
        type: "Full Kit",
        brand: "Ludwig",
        color: "Blue/Olive",
        price: 2200.00,
        description: "A true one of a kind, this kit is our only currently held Ludwig, and sadly, not for long. As these kits are as sought after as they are rare the chances to get your hands on one is fleeting, even now!",
        img: "Images/Products/sab_kit.jpg",
        //Photo by ASBA DRUMS: https://www.pexels.com/photo/white-and-blue-drum-set-in-close-up-shot-9655369/
        from: "USA"
      },
      {
        name: "Natal Birch",
        category: "Drum Kit",
        type: "Full Kit",
        brand: "Natal",
        color: "Flamed Wood",
        price: 1350.00,
        description: "Natal are known for outlandish quality and attention to detail, this full Birch kit offers something for everyone and is as tonally cohesive as we have come to expect from Natal",
        img: "Images/Products/modern_kit.jpg",
        // Photo by <a href="https://unsplash.com/@ingridi_alves?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ingridi Alves Photograph</a> on <a href="https://unsplash.com/photos/black-planet-drum-kit-near-trees-during-sunset-yePWDGPUWO0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "China"
      },
      {
        name: "Roland RT 30 K",
        category: "Drum Kit",
        type: "Electric Kit",
        brand: "Roland",
        color: "Black",
        price: 580.00,
        description: "Living in the city or just don't wanna disturb the restful sleeps of those around you? The RT 30 K is an exceptional alternative offering with fully weighted pads and accessible headphone controls this is a great starting point for young players",
        img: "Images/Products/rol_elec.jpg",
        // Photo by Boris Pavlikovsky: https://www.pexels.com/photo/black-drum-set-in-close-up-shot-7715572/
        from: "China"
      },
      {
        name: "Yamaha DTX Multi 12",
        category: "Drum Kit",
        type: "Electric Kit",
        brand: "Yamaha",
        color: "Black",
        price: 700.00,
        description: "Yamaha are a diverse company that makes quality their calling card, Yamaha's musical instrument department pride themselves on maintaining the standard of their well known and respected counterparts throughout Yamaha.",
        img: "Images/Products/alt_elec.jpg",
        // Photo by <a href="https://unsplash.com/@angrytortilla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joel Drzycimski</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-set-of-speakers-on-top-of-a-vehicle-T1774z0Y2Uo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "Japan"
      },
      {
        name: "DW Black Nickel",
        category: "Drum Kit",
        type: "Snare Drum",
        color: "Black",
        size: "14”x5”",
        brand: "DW",
        color: "Black Nickel",
        price: 400.00,
        description: "DW offer an incredible top-of-the-range snare here with a incredible highs and a delicate response, this is one that will reward the hours spent labouring over tone and tuning!",
        img: "Images/Products/tight_kit.jpg",
        // Photo by Andreu Marquès: https://www.pexels.com/photo/drumsticks-and-a-drum-set-7450047/
        from: "USA"
      },
      {
        name: "Pearl Sensitone Brass",
        category: "Drum Kit",
        type: "Snare Drum",
        size: "14”x5”",
        brand: "Pearl",
        color: "Brass",
        price: 290.00,
        description: "Classic Pearl Sensitone for when the job needs doing and needs doing right, Brass cased and Broad this snare is punchy and clear",
        img: "Images/Products/brass_snare.jpg",
        // Photo by ASBA DRUMS: https://www.pexels.com/photo/asba-steel-snare-drum-9463074/
        from: "China"
      },
      {
        name: "Gretsch Renown Maple",
        category: "Drum Kit",
        type: "Snare Drum",
        size: "14”x5”",
        brand: "Gretsch",
        color: "Maple",
        price: 525.00,
        description: "The Gretsch renown is a tasty piece of kit and among all out other offerings, has the most rounded and warm tone available.",
        img: "Images/Products/out_kit.jpg",
        // Photo by ASBA DRUMS: https://www.pexels.com/photo/a-snare-drum-on-the-floor-7858690/
        from: "USA"
      },
      {
        name: "Mapex Black Panther",
        category: "Drum Kit",
        type: "Snare Drum",
        size: "14”x6”",
        brand: "Mapex",
        color: "Black",
        price: 465.00,
        description: "The Black Panther is as imagined, with a quick response and drop off, this snare tends to find one owner and is rarely moved on, a real gem!",
        img: "Images/Products/special_snare.jpg",
        // Photo by ASBA DRUMS: https://www.pexels.com/photo/a-snare-drum-on-the-floor-7858690/
        from: "China"
      },
      {
        name: "Pearl Chad Smith",
        category: "Drum Kit",
        type: "Snare Drum",
        size: "14”x5”",
        brand: "Pearl",
        color: "Steel",
        price: 330.00,
        description: "Are you a RHCP fanatic? If so this one is for you, powerful and demandingthe Chad Smith signature by Pearl has proven itself as a workhorse who doesn't comprimise on style",
        img: "Images/Products/smith_snare.jpg",
        //Photo by Hernán Santarelli: https://www.pexels.com/photo/wooden-drumsticks-on-the-snare-drum-6059430/
        from: "USA"
      },
      {
        name: "Sabian Hand Hammered",
        category: "Drum Kit",
        type: "Cymbal",
        brand: "Sabian",
        color: "Brass",
        price: 370.00,
        description: "Sabian are one of the largest players globally for all things cymbals and the Hand Hammered Crash is no reason to doubt their continued efforts. Resonant and warm this cymbal is at home in almost all rigs",
        img: "Images/Products/ham_cym.jpg",
        //Photo by Caio Cardenas: https://www.pexels.com/photo/metal-cymbals-with-geometric-pattern-on-surface-4232245/
        from: "USA"
      },
      {
        name: "Zildjian Dead Ringers",
        category: "Drum Kit",
        type: "Cymbal",
        brand: "Zildjian",
        color: "Brass",
        price: 650.00,
        description: "Crash onto the scene with world leaders Zildjian's Dead Ringers. A lifetime purchase even in the world of drum breakables.",
        img: "Images/Products/zild_cym.jpg",
        // Photo by Nikita Nikitin: https://www.pexels.com/photo/zildjian-metal-cymbal-10719648/
        from: "USA"
      },
      {
        name: "Sabian Dead Ringers",
        category: "Drum Kit",
        type: "Cymbal",
        brand: "Sabian",
        color: "Brass",
        price: 400.00,
        description: "Sabian's answer to the Zildjian Dead Ringer, an uncomprimising Crash that does a decent amount of heavy lifting for it's price tag",
        img: "Images/Products/sab_cym.jpg",
        // Photo by Pixabay: https://www.pexels.com/photo/gold-cymbals-164967/
        from: "USA"
      },
      {
        name: "Meinl TS-TS",
        category: "Drum Kit",
        type: "Hi-Hats",
        brand: "Meinl",
        color: "Brass",
        price: 250.00,
        description: "The Meinl TS-TS represents a coming of age for Meinl's Hi-Hat division, a crisp and responsive set of Hats with no parallel sat their price point",
        img : "Images/Products/hats_cym.jpg",
        //Photo by cottonbro studio: https://www.pexels.com/photo/close-up-of-a-drum-kit-5650534/
        from: "USA"
      },
      {
        name: "Dave Smith Prophet Rev 2 16",
        category: "Keys",
        type: "Synth",
        brand: "Dave Smith",
        color: "Black",
        price: 1800.00,
        description: "The highest of high end rigs, with 1000s of presents and the ability to customise them to the Nth degree. A behemoth!",
        img: "Images/Products/slick_keys.jpg",
        // Photo by <a href="https://unsplash.com/@cmalquist?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clayton Malquist</a> on <a href="https://unsplash.com/photos/black-and-white-electric-keyboard-7RltB1AjUlU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "Nord Electro 2 61",
        category: "Keys",
        type: "Keyboard",
        brand: "Nord",
        color: "Red",
        price: 1200.00,
        description: "A powerhouse and a workhorse, well known to those that tickle the keys. Unlikely to be matched at it's price point any time soon",
        img: "Images/Products/red_synth.jpg",
        // Photo by <a href="https://unsplash.com/@thevictorbarrios?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victor Barrios</a> on <a href="https://unsplash.com/photos/red-electric-keyboard-MuWNask22xs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "Nord Stage Compact 73",
        category: "Keys",
        type: "Keyboard",
        brand: "Nord",
        color: "Red",
        price: 900.00,
        description: "Another workhorse offering from Nord this time more suited to the tighter stage and the home studeio the Compact 73 is as versatile as it is classic in all it's functions.",
        img: "Images/Products/red_keys.jpg",
        //Photo by <a href="https://unsplash.com/@hermez777?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hermes Rivera</a> on <a href="https://unsplash.com/photos/person-playing-red-and-white-piano-CRSVXXW16U8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      },
      {
        name: "Roland RD 700",
        category: "Keys",
        type: "Weighted Keyboard",
        brand: "Roland",
        color: "Black",
        price: 1100.00,
        description: "Not tot be outdone the ROland RD 700 offers a myriad of new features and offers the very best of what Roland brings to the mid-range market!",
        img: "Images/Products/full_keys.jpg",
        //Photo by cottonbro studio: https://www.pexels.com/photo/a-man-playing-piano-inside-a-music-studio-7088370/
        from: "USA"
      },
      {
        name: "Korg Triton Studio 88",
        category: "Keys",
        type: "Keyboard",
        brand: "Korg",
        color: "Black",
        price: 800.00,
        description: "Perfectly usable live or in studio the Triton Studio 88 has a focus on audio fidelity and produces the most incredible Hi-Fi signals possible for it's market position.",
        img: "Images/Products/black_keys.jpg",
        // Photo by Yan Krukau: https://www.pexels.com/photo/man-in-blue-button-up-polo-playing-piano-8520414/
        from: "USA"
      },
      {
        name: "Yamaha Motif XS8",
        category: "Keys",
        type: "Keyboard",
        brand: "Yamaha",
        color: "Silver",
        price: 800.00,
        description: "Yamaha are a diverse company that makes quality their calling card, Yamaha's musical instrument department pride themselves on maintaining the standard of their well known and respected counterparts throughout Yamaha.",
        img: "Images/Products/max_synth.jpg",
        //Photo by Hallux Makenzo: https://www.pexels.com/photo/man-wearing-black-crew-neck-shirt-holding-white-keyboards-743728/
        from: "USA"
      },
      {
        name: "Moog Sub 37",
        category: "Keys",
        type: "Synth",
        brand: "Moog",
        color: "Black",
        price: 1100.00,
        description: "A remake of the classic moog analog synthesizer, there are no alternatives to achieving the Moog tone!",
        img: "Images/Products/moog_synth.jpg",
        // Photo by <a href="https://unsplash.com/@a8ka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anton Shuvalov</a> on <a href="https://unsplash.com/photos/black-and-gray-audio-mixer-WFIoD6zWn98?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
        from: "USA"
      },
      {
        name: "M-Audio Keystation 61",
        category: "Keys",
        type: "Keyboard",
        brand: "M-Audio",
        color: "Silver",
        price: 400.00,
        description: "M-Audio are known for their incredible software integrations and entry level gear. Here they have developed a succinct but choice group of patches and presents which allow the beginning keyboard player an avenue to good tone for very little money!",
        img: "Images/Products/silver_keys.jpg",
        //Photo by <a href="https://unsplash.com/@yuyiolulu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Yuyi Chang</a> on <a href="https://unsplash.com/photos/gray-and-black-electronic-keyboard-VnEIGgL6c-k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        from: "USA"
      }
];

const AUDIO_PRODUCTS_LIST = [
  {
      name: "AC30",
      category: "Amplifiers",
      type: "Valve Guitar Amp",
      brand: "Vox",
      color: "British Racing Green",
      from: "China",
      img: "Images/Products/vox_amp.jpg",
      // Photo by Wendy Wei: https://www.pexels.com/photo/mic-on-guitar-amplifier-10866261/
      price: 800.00,
      description: "An all-time classic, the AC30's impact and presence cannot be argued. A perfect amp for small venues with no fussing!"
    },
    {
      name: "Hot Rod Deluxe",
      category: "Amplifiers",
      type: "Valve Guitar Amp",
      brand: "Fender",
      color: "Black",
      from: "USA",
      img: "Images/Products/fender_amp.jpg",
      // Photo by <a href="https://unsplash.com/@santiagomunz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Santiago Munoz</a> on <a href="https://unsplash.com/photos/black-and-gray-guitar-amplifier-Z9E3lCpTuiE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 650.00,
      description: "The Hot Rod Deluxe is one of Fender's signature Amplifiers, with enough heft to sooth any future Rockstar's appetite for grit!"
    },
    {
      name: "JCM800",
      category: "Amplifiers",
      type: "Valve Guitar Amp",
      brand: "Marshall",
      color: "Black",
      from: "China",
      img: "Images/Products/red_amp.jpg",
      // Photo by <a href="https://unsplash.com/@madebymorro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Made By Morro</a> on <a href="https://unsplash.com/photos/photo-of-brown-marshal-guitar-amplifier-on-brown-board-9-79QZ3eBZM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 800.00,
      description: "The JCM800 represents Marshall's mid-tier offerings as well as any amp, capable and sturdy like all marshall products, an amp for life, in the right hands!"
    },
    {
      name: "Dual Rectifier",
      category: "Amplifiers",
      type: "Valve Guitar Amp",
      brand: "Mesa Boogie",
      color: "Black",
      from: "USA",
      img: "Images/Products/bug_amp.jpg",
      // Photo by <a href="https://unsplash.com/@freestocks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">freestocks</a> on <a href="https://unsplash.com/photos/black-and-white-bugera-guitar-amplifier-uK9QFr3fFk0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 1100.00,
      description: "A modern take on the Rectifier, Mesa Boogie are back and bettere than ever with their stereo channeled valve destroyer!"
    },
    {
      name: "Rockerverb 50",
      category: "Amplifiers",
      type: "Valve Guitar Amp",
      brand: "Orange",
      color: "Orange",
      from: "Great Britain",
      img: "Images/Products/orange_amp.jpg",
      //Photo by <a href="https://unsplash.com/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adi Goldstein</a> on <a href="https://unsplash.com/photos/orange-and-gray-orange-radio-on-brown-wooden-plank-WV1QafYWqvQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 900.00,
      description: "Orange have always been swing for the fences, however, this Rockverb series offers the dynamic range and ease of usage that is rivalled only by the hghest end gear on the planet!"
    },
    {
      name: "SVT Classic",
      category: "Amplifiers",
      type: "Valve Bass Amp",
      brand: "Ampeg",
      color: "Black",
      from: "USA",
      img: "Images/Products/bass_amp.jpg",
      //Photo by Martin Avdik: https://www.pexels.com/photo/amplifier-standing-by-the-wall-16613391/
      price: 1200.00,
      description: "When we think of Bass Amplification, Ampeg are the name we turn to. The SVT Classic is just that - An all time Classic!"
    },
    {
      name: "Rumble 500",
      category: "Amplifiers",
      type: "Digital Bass Amp",
      brand: "Fender",
      color: "Black",
      from: "USA",
      img: "Images/Products/fend_amp.jpg",
      //Photo by <a href="https://unsplash.com/@santiagomunz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Santiago Munoz</a> on <a href="https://unsplash.com/photos/black-and-gray-guitar-amplifier-Z9E3lCpTuiE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      price: 550.00,
      description: "Perhaps lesser known than their guitar models the Fender rumble has managed none the less to make a significant impact on the contempory bass scene!"
    },
    {
      name: "LH1000",
      category: "Amplifiers",
      type: "Hybrid Bass Amp",
      brand: "Hartke",
      color: "Black",
      from: "China",
      img: "Images/Products/har_amp.jpg",
      // Photo by <a href="https://unsplash.com/@takahiro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Takahiro Sakamoto</a> on <a href="https://unsplash.com/photos/black-and-gray-marshall-guitar-amplifier-fNmxAnIweJU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      price: 879.00,
      description: "Never fear Hartke are here! A tremendous track record led to the much awaited release of the LH1000 and here, many moons later, these bad boys are still prized possessions! Known for their veratility and movability!"
    },
    {
      name: "SM58",
      category: "Microphones",
      type: "Dynamic",
      brand: "Shure",
      color: "Black",
      from: "USA",
      img: "Images/Products/sm58.png",
      // Photo by Pixabay: https://www.pexels.com/photo/black-and-gray-microphone-164829/
      price: 90.00,
      description: "THE vocal microphone. Every studio in the country is kitted out with SM58's and for good reason. You will not find a more competitive and quality micrphone in this price range!"
    },
    {
      name: "SM57",
      category: "Microphones",
      type: "Dynamic",
      brand: "Shure",
      color: "Black",
      from: "USA",
      img: "Images/Products/sm58.png",
      // Photo by Pixabay: https://www.pexels.com/photo/black-and-gray-microphone-164829/
      price: 90.00,
      description: "THE instrument microphone. Every studio in the country is kitted out with SM58's and for good reason. You will not find a more competitive and quality micrphone in this price range!"
    },
    {
      name: "C414",
      category: "Microphones",
      type: "Condenser",
      brand: "AKG",
      color: "Silver",
      from: "China",
      img: "Images/Products/cond_mic.jpg",
      // Photo by Lukas Pereira: https://www.pexels.com/photo/grey-microphone-2097428/
      price: 110.00,
      description: "A warm and inviting tone comes from the sensitive yet sturdy C414. Most suitable for intimate recording sessions and small venues!"
    },
    {
      name: "E904",
      category: "Microphones",
      type: "Dynamic",
      brand: "Sennheiser",
      color: "Black",
      from: "China",
      img: "Images/Products/ribb_mic.jpg",
      // Photo by Brett Sayles from Pexels: https://www.pexels.com/photo/gray-blue-yeti-1080746/
      price: 120.00,
      description: "Sennheiser's name is synonymous with quality and precision, and for good reason. With the E904 they offer some of the brightest response found in a Sennheiser mic to date!"
    },
    {
      name: "KM184",
      category: "Microphones",
      type: "Condenser",
      brand: "Neumann",
      color: "Nickel",
      from: "USA",
      img: "Images/Products/old_mic.jpg",
      // Photo by Skitterphoto: https://www.pexels.com/photo/silver-colored-microphone-675960/
      price: 250.00,
      description: "Neumann are one of the big players in Audiofile technology and the KM184 is a beast no doubt about it with a high end condenser and sturdy case, you can't go wrong!"
    },
    {
      name: "PS 8",
      category: "Speaker Systems",
      type: "Powered",
      brand: "Nexo",
      color: "Black",
      from: "USA",
      img: "Images/Products/big_speak.jpg",
      // Photo by <a href="https://unsplash.com/@cbpsc1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clint Patterson</a> on <a href="https://unsplash.com/photos/close-up-photo-of-hanging-speaker-pHSjhC6s80M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 700.00,
      description: "Nexo make speakers you can trust! With the PS 8 live gigging has never been easier. These powered speakers can scale all the way from a room to a full size concert theater!"
    },
    {
      name: "LS 400",
      category: "Speaker Systems",
      type: "Passive",
      brand: "Nexo",
      color: "Black",
      from: "China",
      img: "Images/Products/lil_speak.jpg",
      //Photo by <a href="https://unsplash.com/@pinjasaur?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Esch-Laurent</a> on <a href="https://unsplash.com/photos/black-speaker-on-table-YU-OA2TvQRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      price: 400.00,
      description: "Nexo make speakers you can trust! With the LS 400 recording has never been more pleasant. These passive speakers are perfect for recording sessions or smaller gigging venues! "
    },
    {
      name: "M2",
      category: "PA Systems",
      type: "Passive",
      brand: "D&B",
      color: "Black",
      from: "Germany",
      img: "Images/Products/sys_pa.jpg",
      // Photo by <a href="https://unsplash.com/@arcreates?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anthony Roberts</a> on <a href="https://unsplash.com/photos/gray-and-black-audio-mixer-82wJ10pX1Fw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      price: 650.00,
      description: "D&B have been renowned for quality builds since inception and now you can benefit from their top of the range PA systems for rental or purchase!"
    },
    {
      name: "M4",
      category: "PA Systems",
      type: "Passive",
      brand: "D&B",
      color: "Black",
      from: "Germany",
      img: "Images/Products/sys2_pa.jpg",
      // Photo by <a href="https://unsplash.com/@james2k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">James Kovin</a> on <a href="https://unsplash.com/photos/black-and-green-audio-mixer-F2h_WbKnX4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      price: 800.00,
      description: "D&B have been renowned for quality builds since inception and now you can benefit from their top of the range PA systems for rental or purchase!"
    },
    {
      name: "EW300 G3 w/ AC 3 Combiner and Belt Packs",
      category: "Monitors",
      type: "In-Ear",
      brand: "Sennheiser",
      color: "Black",
      from: "Germany",
      img: "Images/Products/only_iem.jpg",
      //Photo by Jessica Lewis 🦋 thepaintedsquare: https://www.pexels.com/photo/black-headphone-2919003/
      price: 700.00,
      description: "These entry-level In-Ear montors are a game changer for anyone trying to upscale their stage presence, with unrivaled clarity Sennheiser have once again delivered an instant classic!"
    },
    {
      name: "M2",
      category: "Monitors",
      type: "Passive",
      brand: "D&B",
      color: "Black",
      from: "Germany",
      img: "Images/Products/Gigabyte-Studio-Monitor.png",
      // Photo by Marinko Krsmanovic: https://www.pexels.com/photo/black-speaker-close-up-photography-2651794/
      price: 600.00,
      description: "D&B's classic monitors the M2 and M4 or veterans on the scene. Functional as studio or live monitors you won't find better at their price point!"
    },
    {
      name: "M4",
      category: "Monitors",
      type: "Passive",
      brand: "D&B",
      color: "Black",
      from: "Germany",
      img: "Images/Products/Gigabyte-Studio-Monitor.png",
      // Photo by Marinko Krsmanovic: https://www.pexels.com/photo/black-speaker-close-up-photography-2651794/
      price: 800.00,
      description: "D&B's classic monitors the M2 and M4 or veterans on the scene. Functional as studio or live monitors you won't find better at their price point!"
    },
    {
      name: "HiQ",
      category: "Monitors",
      type: "Passive",
      brand: "L’Acoustic",
      color: "Black",
      from: "France",
      img: "Images/Products/stud_mon.jpg",
      //Photo by Josh Sorenson: https://www.pexels.com/photo/desk-computer-setup-inside-a-room-9469520/
      price: 1200,
      description: "A Botique passive monitor set with the ability to chain easily for stereo and surround mix options. L’Acoustic always bring their style and energy to each project and this is no different!"
    }
]