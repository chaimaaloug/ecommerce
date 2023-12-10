import Slider from "react-slick";
import Address from "../../components/Adress/Address";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Reinsurance from "../../components/Reinsurance/Reinsurance";
import Title from "../../components/Title/Title";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import ProductCard from "../../components/ProductCard/ProductCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './Product.module.scss';
import price from "../../assets/icons/price.svg"
import Button from "../../components/Button/Button";
import QuantitySelector from "../../components/QuantityPicker/QuantityPicker"
import {useState } from "react";
import ShoppingCartModal from "../../components/ShoppingCartModal/ShoppingCartModal";

const parseDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <div key={index}>
        {line} <br />
      </div>
    ));
  };
  
const Product = () => {
  const { slug } = useParams();
  const [selectedTab, setSelectedTab] = useState('description');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [deletedProductId, setDeletedProductId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const product = products.reduce((acc, category) => {
    const foundProduct = category.products.find((p) => p.slug === slug);
    return foundProduct ? foundProduct : acc;
  }, null);

  const category = product ? products.find((category) => category.products.some((p) => p.slug === slug)) : null;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 370,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const updateSelectedQuantity = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  const handleShoppingBagClick = () => {
    setIsOpen(true);
  };

  const handleAddToCart = () => {
    setCartQuantity(selectedQuantity);
    const newSelectedProduct = {
      id: product.id,
      name: product.name,
      quantity: selectedQuantity,
      isAvailableForDelivery: product.isAvailableForDelivery,
      price: product.price,
      hasDiscount: product.hasDiscount,
      priceAfterDiscount: product.priceAfterDiscount,
      imageSrc: product.images[0],
    };
  
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, newSelectedProduct]);
  };

  const onDeleteProduct = (productId) => {
    setDeletedProductId(productId);
  };

  const handleDeleteProduct = (productId) => {
    onDeleteProduct(productId);
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <>
      <Header cartQuantity={cartQuantity} selectedProducts={selectedProducts} onDeleteProduct={handleDeleteProduct}/>
      <Slider {...sliderSettings}>
        {product.images.map((image, index) => (
          <div key={index} className={style.sliderImg}>
            <img src={require(`../../assets/images/${image}`)} alt="" />
          </div>
        ))}
      </Slider>
      <ShoppingCartModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        selectedProducts={selectedProducts} 
        onDeleteProduct={handleDeleteProduct}  
      />
      <div className={style.productInfo}>
        <div className={style.productInfoFlex}>
          <div>
            <p>{category.categoryName}</p>
            <h2>{product.name}</h2>
          </div>
          <div className={style.priceContainer}>
            <img src={price} alt="" />
            <div className={style.priceFlex}>
              {product.hasDiscount ? (
                <div>
                  <p className={style.originalPrice}>{product.price} €</p>
                  <p>{product.priceAfterDiscount} € </p>
                </div>
              ) : (
                <p>{product.price} €</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p>Combien ?</p>
          <div className={style.quantityContainer}>
            <QuantitySelector onChange={updateSelectedQuantity} />
            <Button label="Ajouter au panier" className="greenButton" onClick={handleAddToCart} />
          </div>
        </div>

        <div className={style.tabsName}>
          <Button
            label="Description"
            className={`tabButton ${
              selectedTab === 'description' ? 'activeTab' : ''
            }`}
            onClick={() => handleTabChange('description')}
          />
          <Button
            label="Details"
            className={`tabButton ${
              selectedTab === 'details' ? 'activeTab' : ''
            }`}
            onClick={() => handleTabChange('details')}
          />
        </div>

        <div>
          {selectedTab === 'description' && (
            <p className={style.productDescription}>
              {parseDescription(product.description)}
            </p>
          )}
          {selectedTab === 'details' && (
            <div className={style.detailsContainer}>
              {product.details.map((detail, index) => (
                <div key={index} className={style.detailItem}>
                  <p className={style.detailTitle}>{detail.title}</p>
                  <div>
                    <p className={style.detailDescription}>{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Title text="ET AVEC CECI ?" className="rotatedTitle" />
      <div className={style.linkedProductsContainer}>
        {product.linkedProducts.map((linkedProductId) => {
          const linkedProduct = products.reduce((acc, category) => {
            return acc || category.products.find((p) => p.id === linkedProductId);
          }, null);
          if (linkedProduct) {
            return <ProductCard key={linkedProduct.id} product={linkedProduct} />;
          }
          return null;
        })}
      </div>
      <Button onClick={handleShoppingBagClick}>
        Shopping Cart
      </Button>
      <Reinsurance />
      <Newsletter />
      <Address />
    </>
  );
};

export default Product;