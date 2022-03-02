import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Tentang Project</h1>
        <p>Ini adalah aplikasi Bereaksi untuk meninggalkan umpan balik untuk produk atau layanan</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Beranda</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage