 import product1 from '../assets/images/product1.png'
 import product2 from '../assets/images/product2.png'
 import product3 from '../assets/images/product3.png'
 import product4 from '../assets/images/product4.png'
 import product5 from '../assets/images/product5.png'

 import season1 from '../assets/images/season1.png'
 import season2 from '../assets/images/season2.png'
 import season3 from '../assets/images/season3.png'
 import season4 from '../assets/images/season4.jpeg'
 import season5 from '../assets/images/season5.png'

 import offer1 from '../assets/images/offer-item.png'
 import offer2 from '../assets/images/offer1.png'
 import offer3 from '../assets/images/offer2.png'

 import video1 from '../assets/images/video-cover.png'
 import video2 from '../assets/images/video1.png'
 import video3 from '../assets/images/video2.png'
 import video4 from '../assets/images/video3.png'
 import video5 from '../assets/images/video4.png'




 
 
 const products = [
    {
      id: 1,
      satisLiderleri: [
        {
          id: 1,
          name: "OPPO A57S 4/64 GB Sky Blue",
          nagdAlis: true,
          endirim: 20,
          image: product1,
          price: "419,99",
          discountPrice: "399,99",
          screen: "6.56",
          ram: 4,
          rom: 64,
        },
        {
          id: 2,
          name: "Samsung Galaxy A24 (SM-A245) 6/128 GB Black",
          image: product2,
          nagdAlis: false,
          endirim: 0,
          price: "1019,99",
          discountPrice: null,
          screen: "6.56",
          ram: 8,
          rom: 128,
        },
        {
          id: 3,
          name: "HUAWEI P60 Pro 8/256 GB Rococo Pearl",
          image: product3,
          nagdAlis: true,
          endirim: 10,
          price: "819,99",
          discountPrice: "799,99",
          screen: "6.56",
          ram: 6,
          rom: 64,
        },
        {
          id: 4,
          name: "Xiaomi Redmi 12 8/256 GB Sky Blue",
          image: product4,
          nagdAlis: false,
          price: "519,99",
          discountPrice: null,
          screen: "6.56",
          ram: 4,
          rom: 64,
        },
        {
          id: 5,
          name: "Samsung Galaxy S20+ Dual (SM-G985F) Red",
          image: product5,
          nagdAlis: true,
          endirim: 30,
          price: "419,99",
          discountPrice: "399,99",
          screen: "6.56",
          ram: 4,
          rom: 64,
        }
      ]
    },
    {
      id: 2,
      offers: [
        {
          id: 1,
          name: "Simge Gutson 3 yerli divan",
          image: offer1,
          price: "419,99",
          discountPrice: "399,99",
          credit: "12"
        },
        {
          id: 2,
          name: "İmfa Monreal çarpayı",
          image: offer2,
          price: "399,99",
          discountPrice: "259,99",
          credit: "24"
        },
        {
          id: 3,
          name: "Paltaryuyan LG F2J3NS0W ",
          image: offer3,
          price: "999,99",
          discountPrice: "799,99",
          credit: "18"
        }
      ]
    },
    {
      id: 3,
      season: [
        {
          id: 1,
          delivery: true,
          image: season1,
          name: "Konvektor DeLonghi HCX9120E",
          price: "359,99",
          discountPrice: "259,99",
          endirim: 60
        },
        {
          id: 2,
          delivery: false,
          image: season2,
          name: "Konvektor DeLonghi HCX9120E",
          price: "59,99",
          discountPrice: "39,99",
          endirim: 10
        },
        {
          id: 3,
          delivery: true,
          image: season3,
          name: "Radiator HOFFMANN OH9111 Black",
          price: "149,99",
          discountPrice: "129,99",
          endirim: 20
        },
        {
          id: 4,
          delivery: false,
          image: season4,
          name: "WMF termos torpak 3201112019",
          price: "79,99",
          discountPrice: "59,99",
          endirim: 15
        },
        {
          id: 5,
          delivery: true,
          image: season5,
          name: "Elektri̇kli̇ şərab açan Huo Hou HU0122",
          price: "59,99",
          discountPrice: "39,99",
          endirim: 20
        },
      ]
    },
    {
      id: 4,
      video: [
        {
          id: 1,
          videoImage: video1,
          videoTitle: "Təmir işlərinin başını burax. Soyuducu axtarırsansa, Kontakt var. "
        },
        {
          id: 2,
          videoImage: video2,
          videoTitle: "OPPO Kontakt-da"
        },
        {
          id: 3,
          videoImage: video3,
          videoTitle: "Find N3"
        },
        {
          id: 4,
          videoImage: video4,
          videoTitle: "Bosch qabyuyanları "
        },
        {
          id: 5,
          videoImage: video5,
          videoTitle: "Qafqazın ən böyük mağazası!"
        },
      ]
    }
  
]

export default products