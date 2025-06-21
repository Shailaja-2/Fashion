import { FiMapPin, FiPhone } from "react-icons/fi"
import { MdMailOutline } from "react-icons/md"

const ContactInfo = () => {
    return (
        <div className="footer__col">
            <h4>CONTACT INFO</h4>

            <p className="flex items-center">
                <span><FiMapPin /></span>
                1-72, Warangal, Hanmakonda
            </p>

            <p className="flex items-center">
                <span><MdMailOutline /></span>
                anagandula@gmail.com
            </p>

            <p className="flex items-center">
                <span><FiPhone /></span>
                +98 76 54 32 10
            </p>
        </div>
    )
}

export default ContactInfo