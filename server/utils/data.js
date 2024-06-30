const data = [
    
  {
      name: "Acheron",
      damage_type: "Lightning",
      path: "Nihility",
      rarity: "5-star",
      affiliations: {
          "0":"Galaxy Rangers"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Acheron"
  },
  {
      name: "Argenti",
      damage_type: "Physical",
      path: "Erudition",
      rarity: "5-star",
      affiliations: {
          "0" :"Knights of Beauty"
      },
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Argenti"

  },
  {
      name: "Arlan",
      damage_type: "Lightning",
      path: "Destruction",
      rarity: "4-star",
      affiliations: { 
          "0":"Herta's Space Station"
      },
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Arlan"

  },
  {
      name: "Asta",
      damage_type: "Fire",
      path: "Harmony",
      rarity: "4-star",
      affiliations: { 
          "0":"Herta's Space Station"
      },
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Asta"

  },
  {
      name: "Aventurine",
      damage_type: "Imaginary",
      path: "Preservation",
      rarity: "5-star",
      affiliations: {
          "0":"Interastral Peace Corp."
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Dr._Ratio"
  },
  {
      name: "Bailu",
      damage_type: "Lightning",
      path: "Abundance",
      rarity: "5-star",
      affiliations: {
          "0":"Vidyahara",
          "1":"Xianzhou Loufou"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Bailu"
  },
  {
      name: "Black Swan",
      damage_type: "Wind",
      path: "Nihility",
      rarity: "5-star",
      affiliations: {
          "0":"Garden of Recollection"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Black_Swan"
  },
  {
      name: "Blade",
      damage_type: "Wind",
      path: "Destruction",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Stellaron Hunters",
          "2":"High-Cloud Quintet"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Blade"
  },
  {
      name: "Boothill",
      damage_type: "Physical",
      path: "Hunt",
      rarity: "5-star",
      affiliations: {
          "0":"Galaxy Rangers"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Boothill"
  },
  {
      name: "Bronya",
      damage_type: "Wind",
      path: "Harmony",
      rarity: "5-star",
      affiliations: {
          "0":"Belobog",
          "1":"Overworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Bronya"
  }, 
  {
      name: "Clara",
      damage_type: "Physical",
      path: "Destruction",
      rarity: "5-star",
      affiliations: {
          "0":"Belobog",
          "1":"Underworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Clara"
  },
  {
      name: "Dan Heng",
      damage_type: "Wind",
      path: "Hunt",
      rarity: "4-star",
      affiliations: {
          "0":"Astral Express"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Dan_Heng"
  },
  {
      name: "Dan Heng Imbibitor Lunae",
      damage_type: "Imaginary",
      path: "Destruction",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Vidyahara",
          "2":"High-Cloud Quintet"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Dan_Heng_•_Imbibitor_Lunae"
  },
  {
      name: "Dr. Ratio",
      damage_type: "Imaginary",
      path: "Hunt",
      rarity: "5-star",
      affiliations: {
          "0":"Intelligentsia Guild"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Dr._Ratio"
  },
  {
    name:"Firefly",
    damage_type:"Fire",
    path:"Destruction",
    rarity:"5-star",
    affiliations:{
        0:"Stellaron Hunters",
    },
    wiki_url:"https://honkai-star-rail.fandom.com/wiki/Firefly"
  },
  {
      name: "Fu Xuan",
      damage_type: "Quantum",
      path: "Preservation",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Divination Commission"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Fu_Xuan"
  },
  {
      name: "Gallagher",
      damage_type: "Fire",
      path: "Abundance",
      rarity: "4-star",
      affiliations: {
          "0":"Penacony",
          "1":"Bloodhound Family"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Gallagher"
  },
  {
      name: "Gepard",
      damage_type: "Ice",
      path: "Preservation",
      rarity: "5-star",
      affiliations: {
          "0":"Belobog",
          "1":"Overworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Gepard"
  },
  {
      name: "Guinaifen",
      damage_type: "Fire",
      path: "Nihility",
      rarity: "4-star",
      affiliations: {
          "0":"Xianzhou Loufou"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Guinaifen"
  },
  {
      name: "Hanya",
      damage_type: "Physical",
      path: "Harmony",
      rarity: "4-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Ten-Lords Commission"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Hanya"
  },
  {
      name: "Herta",
      damage_type: "Ice",
      path: "Erudition",
      rarity: "4-star",
      affiliations: {
          "0":"Herta's Space Station",
          "1":"Genius Society"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Herta"
  },
  {
      name: "Himeko",
      damage_type: "Fire",
      path: "Erudition",
      rarity: "5-star",
      affiliations: {
          "0":"Astral Express"

      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Himeko"
  },
  {
      name: "Hook",
      damage_type: "Fire",
      path: "Destruction",
      rarity: "4-star",
      affiliations: {
          "0":"Belobog",
          "1":"Underworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Hook"
  },
  {
      name: "Huohuo",
      damage_type: "Wind",
      path: "Abundance",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Ten-Lords Commission"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Huohuo"
  },
  {
    name:"Jade",
    damage_type:"Quantum",
    path:"Erudition",
    rarity:"5-star",
    affiliations:{
        "0":"Interastral Peace Corp.",
    },
    wiki_url:"https://honkai-star-rail.fandom.com/wiki/Jade"
},
  {
      name: "Jing Yuan",
      damage_type: "Lightning",
      path: "Erudition",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"Cloud Knights",
          "2":"High-Cloud Quintet"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Jing_Yuan"
  },
  {
      name: "Jingliu",
      damage_type: "Ice",
      path: "Destruction",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou",
          "1":"High-Cloud Quintet"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Jingliu"
  },
  {
      name: "Kafka",
      damage_type: "Lightning",
      path: "Nihility",
      rarity: "5-star",
      affiliations: {
          "0":"Stellaron Hunters"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Kafka"
  },
  {
      name: "Luka",
      damage_type: "Physical",
      path: "Nihility",
      rarity: "4-star",
      affiliations: {
          "0":"Belobog",
          "1":"Underworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Luka"
  },
  {
      name: "Luocha",
      damage_type: "Imaginary",
      path: "Abundance",
      rarity: "5-star",
      affiliations: {
          "0":"Xianzhou Loufou"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Luocha"
  },
  {
      name: "Lynx",
      damage_type: "Quantum",
      path: "Abundance",
      rarity: "4-star",
      affiliations: {
          "0":"Belobog",
          "1":"Overworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Lynx"
  },
  {
      name: "March 7th",
      damage_type: "Ice",
      path: "Preservation",
      rarity: "4-star",
      affiliations: {
          "0":"Astral Express"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/March_7th"
  },
  {
      name: "Misha",
      damage_type: "Ice",
      path: "Destruction",
      rarity: "4-star",
      affiliations: {
          "0":"Penacony"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Misha"
  },
  {
      name: "Natasha",
      damage_type: "Physical",
      path: "Abundance",
      rarity: "4-star",
      affiliations: {
          "0":"Belobog",
          "1":"Underworld"
      }, 
      wiki_url: "https://honkai-star-rail.fandom.com/wiki/Natasha"
  },
  {
      name: "Pela",
      damage_type:"Ice",
      path:"Nihility",
      rarity:"4-star",
      affiliations:{
          "0":"Belobog",
          "1":"Overworld"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Pela"
  },
  {
      name: "Qingque",
      damage_type:"Quantum",
      path:"Erudition",
      rarity:"4-star",
      affiliations:{
          "0":"Xianzhou Loufou",
          "1":"Divination Commission"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Qingque"
  },
  {
    name:"Robin",
    damage_type:"Physical",
    path:"Harmony",
    rarity:"5-star",
    affiliations:{
        "0":"Penacony",
        "1":"The Family"
    },
    wiki_url:"https://honkai-star-rail.fandom.com/wiki/Robin"
  },
  {
      name:"Ruan Mei",
      damage_type:"Ice",
      path:"Harmony",
      rarity:"5-star",
      affiliations:{
          "0":"Herta's Space Station",
          "1":"Genius Society"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Ruan_Mei"
  },
  {
      name:"Sampo",
      damage_type:"Wind",
      path:"Nihility",
      rarity:"4-star",
      affiliations:{
          "0":"Belobog",
          "1":"Underworld",
          "2":"Masked Fools"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Sampo"
  },
  {
      name:"Seele",
      damage_type:"Quantum",
      path:"Hunt",
      rarity:"5-star",
      affiliations:{
          "0":"Belobog",
          "1":"Overworld"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Seele"
  },
  {
      name:"Serval",
      damage_type:"Lightning",
      path:"Erudition",
      rarity:"4-star",
      affiliations:{
          "0":"Belobog",
          "1":"Overworld"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Serval"
  },
  {
      name:"Silver Wolf",
      damage_type:"Quantum",
      path:"Nihility",
      rarity:"5-star",
      affiliations:{
          "0":"Stellaron Hunters"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Silver_Wolf"
  },
  {
      name:"Sparkle",
      damage_type:"Quantum",
      path:"Harmony",
      rarity:"5-star",
      affiliations:{
          "0":"Masked Fools"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Sparkle"
  },
  {
      name:"Sushang",
      damage_type:"Physical",
      path:"Hunt",
      rarity:"4-star",
      affiliations:{
          "0":"Xianzhou Loufou",
          "1":"Cloud Knights"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Sushang"
  },
  {
      name:"Tingyun",
      damage_type:"Lightning",
      path:"Harmony",
      rarity:"4-star",
      affiliations:{
          "0":"Xianzhou Loufou",
          "1":"Sky-faring Commission"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Tingyun"
  },
  {
      name:"Topaz and Numby",
      damage_type:"Fire",
      path:"Hunt",
      rarity:"5-star",
      affiliations:{
          "0":"Interastral Peace Corp."
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Topaz_and-Numby"
  },
  {
      name:"Trailblazer Physical",
      damage_type:"Physical",
      path:"Destruction",
      rarity:"5-star",
      affiliations:{
          "0":"Astral Express"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Trailblazer"
  },
  {
      name:"Trailblazer Fire",
      damage_type:"Fire",
      path:"Preservation",
      rarity:"5-star",
      affiliations:{
          "0":"Astral Express"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Trailblazer"
  },
  {
      name:"Welt",
      damage_type:"Imaginary",
      path:"Nihility",
      rarity:"5-star",
      affiliations:{
          "0":"Astral Express"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Welt"
  },
  {
      name:"Xueyi",
      damage_type:"Quantum",
      path:"Destruction",
      rarity:"4-star",
      affiliations:{
          "0":"Xianzhou Loufou",
          "1":"Ten-Lords Commission"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Xueyi"
  },
  {
      name:"Yanqing",
      damage_type:"Ice",
      path:"Hunt",
      rarity:"5-star",
      affiliations:{
          "0":"Xianzhou Loufou",
          "1":"Cloud Knights"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Yanqing"
  },
  {
      name:"Yukong",
      damage_type:"Imaginary",
      path:"Harmony",
      rarity:"4-star",
      affiliations:{
          0:"Xianzhou Loufou",
          1:"Sky-faring Commission"
      },
      wiki_url:"https://honkai-star-rail.fandom.com/wiki/Yukong"
  }
]

module.exports = data;