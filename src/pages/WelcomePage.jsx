import { Link, useNavigate } from "react-router-dom";

export function WelcomePage() {
  const navigation = useNavigate()
  return (
    <div className="welcome_page">
      <div className="welcome_page_content">
        <h1>Добро пожаловать в чат кулинарии</h1>
        <p>
          Здесь мы вмешиваем ароматы и делимся кулинарными семейными секретами –
          в каждом рецепте кусочек уюта и вкуса вашего дома
        </p>
        <div className="welcome_btn_cont">
          <button onClick={() => {
            navigation('/login')
          }} className="btn btn-yellow">Войти</button>
          <button onClick={() => {
            navigation('/register')
          }} className="btn btn-red">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
