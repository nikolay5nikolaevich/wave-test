import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home_page">
      <div className="home_card">
        <p className="home_tag">Тестовое задание</p>
        <h1 className="home_title">Приветствую вас на своем тестовом задании</h1>
        <h2 className="home_subtitle">by Иванов Николай Николаевич</h2>
        <img
          src={`${import.meta.env.BASE_URL}i.jpg`} 
          alt="Фото автора"
          className="pict_first_page"
        />
        <p>
          <Link to="/menu" className="home_link">
            Перейти ко второй странице
          </Link>
        </p>
      </div>
    </div>
  )
}

export default HomePage
