
function Footer() {
  return (
		<footer className=" bg-gray-700 text-amber-600 bottom-0 w-full text-center pb-10 pt-5">
		<div>
			<a href="#">Jogi nyilatkozat</a>
		</div>
		<div className="flex gap-x-12 justify-center pt-2">
			<a className="text-sm font-semibold leading-6" href="#">Facebook</a>
			<a className="text-sm font-semibold leading-6" href="#">Email</a>
			<a className="text-sm font-semibold leading-6" href="#">YouTube</a>
			<a className="text-sm font-semibold leading-6" href="#">TikTok</a>
		</div>
	</footer>
  );
}

export default Footer;