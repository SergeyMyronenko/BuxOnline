const EditDetailVacancy = ({ role }) => {
  return (
    <div>
      <div>
        <h2>Деталі вакансії</h2>
        <h3>Роль</h3>
        <h4>Роль яку ви б хотіли найняти</h4>
        <form>
          <input type="text" />
          {role === "moderator" && (
            <input type="text" placeholder="Коментар модератора" />
          )}
        </form>

        <h4>Роки досвіду</h4>
        <form>
          <input type="text" />
          {role === "moderator" && (
            <input type="text" placeholder="Коментар модератора" />
          )}
        </form>

        <h3>Навички</h3>
        <form>
          <input type="text" />
          {role === "moderator" && (
            <input type="text" placeholder="Коментар модератора" />
          )}
        </form>
        <h3>Діапазон заробітної плати</h3>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        {role === "moderator" && (
          <input type="text" placeholder="Коментар модератора" />
        )}

        <h3>Місцеположення</h3>
        <form action="">
          <input type="text" />
          {role === "moderator" && (
            <input type="text" placeholder="Коментар модератора" />
          )}
        </form>

        <h3>Мови</h3>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        {role === "moderator" && (
          <input type="text" placeholder="Коментар модератора" />
        )}

        <h3>Переваги роботи</h3>
        <div>
          <form>
            <img src="" alt="" />
            <label htmlFor="">Вид зайнятості</label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
          <form>
            <img src="" alt="" />
            <label htmlFor="">Робоче середовище</label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
          <form>
            <img src="" alt="" />
            <label htmlFor="">Тип бізнесу</label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
        </div>
        <input type="textaria" />
        <h2>Опис роботи</h2>
        <form action="">
          <input type="textaria" />
          {role === "moderator" && (
            <input type="text" placeholder="Коментар модератора" />
          )}
        </form>
      </div>
      {role === "moderator" ? (
        <div className="card-details-button">
          <button className="button details-button" type="submit">
            Внести коментарі
          </button>
          <button className="button apply-button" type="submit">
            Відхилити вакансію
          </button>
        </div>
      ) : (
        <button>Далі</button>
      )}
    </div>
  );
};

export default EditDetailVacancy;
