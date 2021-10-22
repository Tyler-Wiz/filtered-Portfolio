import * as FaIcons from 'react-icons/fa'
import test from './test.jpg'
import imgone from './imgone.jpg'
import imgtwo from './imgtwo.jpg'
import imgthree from './imgthree.jpg'
import imgfour from './imgfour.jpg'

export const portfolioData = [
    { 
      id:1,
      name: "My best client",
      category: ["all", "frontend"],
      imgUrl:imgfour,
      cname:'annie'
    },
    {
      id:2,
      name: "My favorite case",
      category: ["all", "mobile",],
      imgUrl:imgthree,
      cname:'idibia'

    },
    {
      id:3,
      name: "A old job",
      category: ["all", "frontend"],
      imgUrl:imgtwo,
      cname:'idibia'
    },
    {
      id:4,
      name: "It is a really cool website",
      category: ["all", "ux-ui"],
      imgUrl:imgone,
      cname:'idibia'
    },
    {
      id:5,
      name: "Something more",
      category: ["all", "others"],
      imgUrl:test,
      cname:'idibia'
    },
    {
        id:6,
        name: "Something more",
        category: ["all", "others"],
        imgUrl:test,
        cname:'idibia'
      }
  ];