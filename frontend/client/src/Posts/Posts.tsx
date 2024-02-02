import "./Posts.css";

function Posts() {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://i.guim.co.uk/img/media/54e2b9530919ffe21b006f21cdd192d097745f7e/0_54_2560_1536/master/2560.jpg?width=700&quality=85&auto=format&fit=max&s=137c244ec11a9cfb40ca25fe00fcf857"
            alt="image"
          />
        </div>
        <div className="texts">
          <h2>Kung Fu Panda</h2>
          <p className="info">
            <a className="author">Fasiha Arshad</a>
            <time>2-2-2024</time>
          </p>
          <p className="desc">
            Po, a clumsy panda, is a kung fu fanatic who lives in the Valley of
            Peace and works in his goose father Mr. Ping's noodle shop, unable
            to realize his dream of learning the art of kung fu. One day, a kung
            fu tournament is held for the elderly spiritual leader of the
            valley, Grand Master Oogway, to determine the identity of the Dragon
            Warrior, the one kung fu master capable of understanding the secret
            of the Dragon Scroll, which is said to contain the key to limitless
            power.
          </p>
        </div>
      </div>
    </>
  );
}

export default Posts;
