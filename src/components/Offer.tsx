import { Link } from 'react-router-dom'

function Offer() {
  return (
    <div className=" text-center bg-white py-10">
			<h2 className=" text-3xl">
				Keressen minket bizalommal
			</h2>
			<Link to="/contacts" className="text-sm font-semibold leading-6 text-gray-900">
					Elérhetőség
			</Link>
		</div>
  );
}

export default Offer;