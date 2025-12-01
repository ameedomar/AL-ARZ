import React from "react";
import "./../products-layout/grid-styling.css";

import product1 from "../../images/one/1.png";
import product2 from "../../images/one/2.png";
import product3 from "../../images/one/3.png";
import product4 from "../../images/one/4.png";
import product5 from "../../images/one/5.png";
import product6 from "../../images/one/6.png";
import product7 from "../../images/one/7.png";
import product8 from "../../images/one/8.png";
import product9 from "../../images/one/9.png";
import product10 from "../../images/one/10.png";
import product11 from "../../images/one/11.png";
import product12 from "../../images/one/12.png";
import product13 from "../../images/one/13.png";
import product14 from "../../images/one/14.png";
import product15 from "../../images/one/15.png";
import product16 from "../../images/one/16.png";
import product17 from "../../images/one/17.png";
import product18 from "../../images/one/18.png";
import product19 from "../../images/one/19.png";
import product20 from "../../images/one/20.png";
import product21 from "../../images/one/21.png";
import product22 from "../../images/one/22.png";
import product23 from "../../images/one/23.png";
import product24 from "../../images/one/24.png";
import product25 from "../../images/one/25.png";

import product_family1 from "../../images/family/1.png";
import product_family2 from "../../images/family/2.png";
import product_family3 from "../../images/family/3.png";
import product_family4 from "../../images/family/4.png";
import product_family5 from "../../images/family/5.png";
import product_family6 from "../../images/family/6.png";
import product_family7 from "../../images/family/7.png";
import product_family8 from "../../images/family/8.png";
import product_family9 from "../../images/family/9.png";
import product_family10 from "../../images/family/10.png";
import product_family11 from "../../images/family/11.png";
import product_family12 from "../../images/family/12.png";

import product_event1 from "../../images/events/1.png"

function ProductsList() {
  const SingleProducts = [
    { id: 1, img: product1, title: "تشارمز", description: "لوز" },
    {
      id: 2,
      img: product2,
      title: "تشارمز",
      description: "الفراولة والشوكولاته البيضاء",
    },
    { id: 3, img: product3, title: "تشارمز", description: "كوكيز & كريم" },
    { id: 4, img: product4, title: "تشارمز", description: "شوكولاتة" },
    {
      id: 5,
      img: product5,
      title: "أرز كريم",
      description: "تشيز كيك الفراولة",
    },
    { id: 6, img: product6, title: "أرز كريم", description: "كراميل بالقرفة" },
    { id: 7, img: product7, title: "سمر", description: "" },
    { id: 8, img: product8, title: "كابتن", description: "تشيز كيك الفراولة" },
    { id: 9, img: product9, title: "كابتن", description: "كراميل" },
    { id: 10, img: product10, title: "كابتن", description: "شوكولاتة" },
    { id: 11, img: product11, title: "كابتن", description: "فانيلا" },
    { id: 12, img: product12, title: "يا ليل", description: "المستكة العربية" },
    { id: 13, img: product13, title: "ترتوفو", description: "" },
    { id: 14, img: product14, title: "توين", description: "" },
    { id: 15, img: product15, title: "فيكي", description: "" },
    { id: 16, img: product16, title: "دايمة", description: "" },
    { id: 17, img: product17, title: "بيارة", description: "برتقال" },
    { id: 18, img: product18, title: "بيارة", description: "ليمون" },
    { id: 19, img: product19, title: "عبدو", description: "" },
    { id: 20, img: product20, title: "ويني", description: "فانيلا" },
    { id: 21, img: product21, title: "ويني", description: "شكلاته" },
    { id: 22, img: product22, title: "فريشي", description: "لوز" },
    { id: 23, img: product23, title: "لولي أب", description: "لوز" },
    { id: 24, img: product24, title: "فرولا", description: "لوز" },
    { id: 25, img: product25, title: "آيسي", description: "لوز" },
  ];

  const FamilyProducts = [
    { img: product_family1, title: "قطع تشارمز", description: "شوكولاتة" },
    { img: product_family2, title: "قطع تشارمز", description: "بندق" },
    { img: product_family3, title: "رول", description: " الفستق المحمص والمستكة العربية ",},
    { img: product_family4, title: "أرز بريمو", description: "تشبزكيك الفراولة" },
    { img: product_family5, title: "أرز بريمو", description: "كراميل" },
    { img: product_family6, title: "أرز بريمو", description: "كرز" },
    { img: product_family7, title: "أرز بريمو", description: "موكا" },
    { img: product_family8, title: "أرز بريمو", description: "فستق حلبي" },
    { img: product_family9, title: "أزر بريمو", description: "كوكيظ و كريم" },
    { img: product_family10, title: "سكوبس", description: "كريمي" },
    { img: product_family11, title: "سكويس", description: "تانجي" },
    { img: product_family12, title: "سكوبس", description: "ديلايتس" },
  ];

  const EventProducts =[
    { img: product_event1, title: "سكوبس 4.5 لتر", description: "" },

  ]

  return (
    <div className="products">

      <div className="product-group-title">
        <h2>حصة واحدة</h2>
      </div>
      <div className="grid-container">
        {SingleProducts.map((product) => (
          <div className="box">
            <div className="product-img">
              <img
                src={product.img}
                alt={[product.title]}
                className="product-image"
              />
            </div>
            <div className="product-footer">
              <div className="product-title">{product.title}</div>
              <div className="product-desc">{product.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="product-group-title">
        <h2>عبوات عائلية</h2>
      </div>
      <div className="grid-container">
        {FamilyProducts.map((product) => (
          <div className="box">
            <div className="product-img">
              <img
                src={product.img}
                alt={[product.title]}
                className="product-image"
              />
            </div>
            <div className="product-footer">
              <div className="product-title">{product.title}</div>
              <div className="product-desc">{product.description}</div>
            </div>
          </div>
        ))}
      </div>


        <div className="product-group-title">
        <h2>عبوات للمناسبات </h2>
      </div>
      <div className="grid-container-2">
        {EventProducts.map((product) => (
          <div className="box">
            <div className="product-img">
              <img
                src={product.img}
                alt={[product.title]}
                className="product-image-2"
              />
            </div>
            <div className="product-footer">
              <div className="product-title">{product.title}</div>
              <div className="product-desc">{product.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductsList;
