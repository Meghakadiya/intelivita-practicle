import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import recipesdata from './Recipes.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Inbox from './Inbox';
import { Link } from "react-router-dom";

function Main() {
    const dataone = recipesdata
    const data = [...recipesdata];
    data.splice(5, 0, {
        image: "/cheaf.png",
        Discriptionnew: "Delicious Vegan Buddha Bowl",
       
    });
    const categories = [
        {
            name: "Breakfast",
            image: "/breakfast.png",
        },
        {
            name: "Vegan",
            image: "/vegan.png",
        },
        {
            name: "Meat",
            image: "/meat.png",
        },
        {
            name: "Dessert",
            image: "/desset.png",
        },
        {
            name: "Lunch",
            image: "/lunch.png",
        },
        {
            name: "Chocolate",
            image: "/chocalate.png",
        },
    ];
    const instacontent = [
        {
            logo: './logo-oval.png',
            name: "Foodieland.",
            iocn: './official-icon.png',
            Moreiocn: './more-icon.png',
            city: "Tokyo, Japan",
            image: "./insta-item-one.png",
            Description: "The vegetables dishes need to have certain vitamin for those people",
            Dtae: "September 19"
        },
        {
            logo: './logo-oval.png',
            name: "Foodieland.",
            iocn: './official-icon.png',
            Moreiocn: './more-icon.png',
            city: "Tokyo, Japan",
            image: "./insta-item-one.png",
            Description: "The vegetables dishes need to have certain vitamin for those people",
            Dtae: "September 19"
        },
        {
            logo: './logo-oval.png',
            name: "Foodieland.",
            iocn: './official-icon.png',
            Moreiocn: './more-icon.png',
            city: "Tokyo, Japan",
            image: "./insta-item-one.png",
            Description: "The vegetables dishes need to have certain vitamin for those people",
            Dtae: "September 19"
        },
        {
            logo: './logo-oval.png',
            name: "Foodieland.",
            iocn: './official-icon.png',
            Moreiocn: './more-icon.png',
            city: "Tokyo, Japan",
            image: "./insta-item-one.png",
            Description: "The vegetables dishes need to have certain vitamin for those people",
            Dtae: "September 19"
        },
    ]
    return (
        <>
            <section className="banner-section">
                <Container>
                    <Row>
                        <Col lg="6 bg-wp">
                            <div className="banner-wrapper">
                                <div className="banner-header">
                                    <Image src='./hot-recipie.png'></Image>
                                    <span>Hot Recipes</span>
                                </div>
                                <div className="banner-content">
                                    <h2>Spicy delicious chicken wings</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                                </div>
                                <div className="d-flex mt-4 mb-5">
                                    <div className="banner-time-box">
                                        <Image src="./Timer.png"></Image>
                                        <span>30 Minutes</span>
                                    </div>
                                    <div className="banner-time-box ms-3">
                                        <Image src="./ForkKnife.png"></Image>
                                        <span>Chicken</span>
                                    </div>
                                </div>
                              <Row className="pt-5">
                                <Col lg="6">
                                <div className="personal-details"> 
                               <Image className="profile-img" src="./profile-pic.png"></Image>
                               <span>John Smith</span>
                              </div>
                                </Col>
                                <Col lg="6">
                                <div className="video-btn"> 
                                <Button variant="primary">View Recipes <Image src="./PlayCircle.png"></Image></Button>
                                </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="position-absoluate"> 
                            <Image src="./Badge.png"></Image>
                            </div>
                            
                        </Col>
                        <Col lg="6" className="ps-0">
                            <Image src='./banner.jpg' className="bg-width"></Image>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="categories-section">
                <Container>
                    <div className="categories-container">
                        <div className="categoriess-title">
                            <h2>Categories</h2>
                            <button className="view-all-button">View All Categories</button>
                        </div>
                        <div className="categories-grid">
                            {categories.map((category) => (
                                <div key={category.name} className="category-item">
                                    <img src={category.image} alt={category.name} />
                                    <p>{category.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="recipes">
                <div className="recipes-title">
                    <h2>Simple and tasty recipes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <Container>
                <Row>
  {data.map((item, index) => (
    <Col lg={4} key={index}>
      {index !== 5 && (
        <Card>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.Discription}</Card.Title>
            <Card.Text>
              <span>
                <Image src="./Timer.png" />
              </span>
              <span className="short-title">{item.time}</span>
              <span>
                <Image src="./ForkKnife.png" />
              </span>
              <span className="short-title">{item.title}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
            {index === 5 && (

      <Card className="healthy-food">
<h1>Don’t forget to eat 
healthy food</h1>
<Card.Img variant="top" src="./one.png"/>
<span>www.foodieland.com</span>
      </Card>)}
    </Col>
  ))}
</Row>
                </Container>
            </section>

            <section className="middle-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="left-content">
                                <h2>
                                    Everyone can be a
                                    chef in their own kitchen
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </div>
                            <Button variant="primary">Learn More</Button>
                        </Col>
                        <Col lg="6">
                            <div className="right-contennt">
                                <Image src="./cheaf.png"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="checkout-instagram">
                <div className="recipes-title">
                    <h2>Check out @foodieland on Instagram</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="instafeed">
                    <Container>
                        <Row>

                            {
                                instacontent.map((instaitem) => (
                                    <Col lg="3">
                                        <div className="insta-posts">
                                            <div className="wrappers-insta-post">
                                                <div className="warpper-left-heading">
                                                    <Image src={instaitem.logo}></Image>
                                                    <h2>{instaitem.name}</h2>
                                                    <Image src={instaitem.iocn}></Image>
                                                </div>
                                                <div className="wrapper-right-heading">
                                                    <Image src={instaitem.Moreiocn}></Image>
                                                </div>
                                            </div>
                                            <div key={instaitem.name} className="feed-items">
                                                <h4>{instaitem.city}</h4>
                                                <Image src='./insta-item-one.png'></Image>
                                                 <div className="insta-like-post">
                                                    <di className="one">
                                                    <Image src='./Shape.png'></Image>
                                                 <Image src="./Comment.png"></Image>
                                                 <Image src='./Messanger.png'></Image>
                                                    </di>
                                                    <div className="two">
                                                    <Image src='./Pagination.png'></Image>
                                                    </div>

                                                    <div className="two">
                                                    <Image src='./Save.png'></Image>
                                                    </div>
                                                 </div>
                                                 <div className="liked-name"> 
                                                 <Image src='./Oval-new.png'></Image>
                                                 <span>Liked by <b>craig_love </b>and <b>44,686</b> others</span>
                                                 </div>
                                                <p><span>Foodieland.</span>{instaitem.Description}</p>
                                                <spa className="date">{instaitem.Dtae}</spa>
                                            </div>
                                        </div>
                                    </Col>

                                ))}
                        </Row>
                    </Container>
                </div>
                <div className="learn-more">
                    <Button variant="primary">Learn More <Image src="./instagrams.png" className="img"></Image></Button>
                </div>
            </section>

            <section className="data-recipies">
                <Container>
                    <div className="detailsrecipies">
                        <Row>
                            <Col lg="6">
                                <h2>Try this delicious recipe
                                    to make your day</h2>
                            </Col>
                            <Col lg="6">
                                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="list-recipes-data">
                        <Row>
                            {
                                dataone.slice(0,8).map((item) =>
                                (
                                    <Col lg="3">
                                        <Card>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.Discription}</Card.Title>
                                                <Card.Text>
                                                    <sapn>
                                                        <Image src="./Timer.png">
                                                        </Image>
                                                    </sapn>
                                                    <span className="short-title">
                                                        {item.time}
                                                    </span>
                                                    <sapn>
                                                        <Image src="./ForkKnife.png">
                                                        </Image>
                                                    </sapn>
                                                    <span className="short-title">
                                                        {item.title}
                                                    </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                                )
                            };
                        </Row>
                    </div>
                </Container>
            </section>

            <section>
            <Inbox/>
            </section>
        </>
    )
}

export default Main;