import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import AuthLayout from "components/layouts/authLayout";
import ProductDetailContent from "components/productDetailContent";
import ProductCard from "components/ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "assets/icons";
import { useGetPlaceDetailMutation } from "store/services/placeServices";
import LoaderSpin from "components/atoms/LoaderSpin";

const details = {
  title: "Colosseum",
  address: "Italy, Rome",
  review: 5,
  distance: "0 m",
  duration: "0 h",
  type: "Monument",
  hosting: "Italian",
  user: {
    name: "Maria Rossi",
    role: "Social media manager",
    dp: "/images/user.png",
  },
  poster: "/images/poster.webp",
  gallery: [
    "/images/poster-1.webp",
    "/images/poster-2.webp",
    "/images/poster-3.webp",
  ],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
};

function ProductDetail() {
  const { id } = useParams();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [detail, setDetail] = useState(null);
  const [getPlaceDetail, response] = useGetPlaceDetailMutation();

  useEffect(() => {
    if (id) {
      getPlaceDetail({
        id: id,
      });
    }
  }, [id]);

  useEffect(() => {
    if (response?.isSuccess && response?.status === "fulfilled") {
      setDetail(response?.data?.data);
    } else {
      console.log("search form response....", response?.data?.message);
    }
  }, [response?.isSuccess]);

  const handleClickPrevSlide = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleClickNextSlide = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  if (response?.isLoading) {
    return (
      <AuthLayout className="product-detail-page">
        <div className="wrapper">
          <div className="loading-block">
            <LoaderSpin color="#fff" />
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout className="product-detail-page">
      <div className="wrapper">
        <div className="content app-width">
          <div className="product-detail-section">
            <ProductDetailContent
              data={detail}
              showExternalButtons={true}
              showSocialButtons={true}
            />
          </div>
        </div>
        <div className="similar-section">
          <div className="foreground-title">Articles visited by users</div>
          <div className="similar-content app-width">
            <Swiper
              ref={sliderRef}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                type: "fraction",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={handleSlideChange}
              className="swiper-slider"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
              }}
            >
              {[...Array(8)].map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <ProductCard />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="swiper-button-next swiper-button"
              onClick={handleClickNextSlide}
              disabled={!sliderRef.current || sliderRef?.current?.swiper?.isEnd}
            >
              <ArrowRightIcon />
            </button>
            <button
              className="swiper-button-prev swiper-button"
              onClick={handleClickPrevSlide}
              disabled={
                !sliderRef.current || sliderRef?.current?.swiper?.isBeginning
              }
            >
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default ProductDetail;
