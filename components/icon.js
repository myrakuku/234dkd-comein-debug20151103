import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiXiaohongshu } from "react-icons/si";


function Icon() {
  return (
    <>
    <div className="flex space-x-4 justify-center">
        <Link href="https://www.instagram.com/comeinmacbook/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl hover:text-pink-600" />
        </Link>
        <Link href="https://www.facebook.com/comeinmac" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl hover:text-blue-600" />
        </Link>
        <Link href="https://x.com/silicon_xx?s=21" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-4xl hover:text-gray-400" />
        </Link>
    </div>

    <div className="flex space-x-4 justify-center">
      {/* <Link href="https://carousell.com" target="_blank" rel="noopener noreferrer">
        <SiCarousell className="text-4xl hover:text-purple-600" />
      </Link> */}
      <Link href="https://www.xiaohongshu.com/user/profile/6536448f000000000400b3b4?xsec_token=ABkOe5Jy13JDuI8ka0eWPsbYfzvHppTiQkMfy2uWCiOLk=&xsec_source=pc_search" target="_blank" rel="noopener noreferrer">
        <SiXiaohongshu className="text-6xl hover:text-red-600" />
      </Link>
      
    </div>
    </>
  );
}

export default Icon;