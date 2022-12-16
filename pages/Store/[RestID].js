/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import OffButton from "../../component/Offcanvas1";
import MyComponent from "../../component/Map";

const Rest = (posts) => {
  const router = useRouter();
  const { RestID } = router.query;
  console.log(posts.posts?.results[0].photos[0].photo_reference);
  console.log(posts.posts?.results[0]);
  const address = posts.posts?.results[0].formatted_address;
  const openingHours = posts.posts?.results[0].opening_hours?.open_now;
  const img = `/api/photo?maxwidth=400&photo_reference=${posts.posts?.results[0].photos[0].photo_reference}&key=AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0`;
  const rating = posts.posts?.results[0].rating;
  const props = {
    lat: posts.posts?.results[0].geometry.location.lat,
    lng: posts.posts?.results[0].geometry.location.lng,
  };
  return (
    <div>
      <div id="bg">
        <div id="infoContainer">
          <div className="restTitle">{posts.posts?.results[0].name}</div>
          <div className="restAddress">{address}</div>
          <div className="restAddress rating">평점: {rating}</div>
          <div className="box">
            <img className="profile" id="image" src={img} alt="2" />
          </div>
          {openingHours ? (
            <div id="open">영업중</div>
          ) : (
            <div id="close">영업종료</div>
          )}
        </div>
        <MyComponent props={props} />
        <OffButton />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const arr = [
    "라멘트럭",
    "소박한이야기",
    "멘타카무쇼",
    "담택",
    "멘야준",
    "하카다분코",
    "라멘반라이",
    "코카이라멘",
    "김씨네심야식당",
    "무겐스위치",
    "하쿠텐",
    "566라멘",
    "하나라멘",
    "미츠루",
    "츠케루",
    "혼네",
    "오레노라멘",
    "세상끝의라멘",
  ];

  return {
    paths: arr.map((ID) => {
      return {
        params: {
          RestID: ID.toString(),
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { RestID } = context.params;
  let res = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${RestID}&key=AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0&language=ko`
  );
  let posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};

export default Rest;
