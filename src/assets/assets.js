import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Suresh Mehta',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Expert in diagnosing and treating a variety of general health conditions.',
        fees: 500,
        address: {
            line1: 'A-12, Connaught Place',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anita Deshmukh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Gyn)',
        experience: '7 Years',
        about: 'Specialist in women’s health, pregnancy, and reproductive health.',
        fees: 700,
        address: {
            line1: 'Fortis Hospital',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Nisha Sharma',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '4 Years',
        about: 'Focused on skin, hair, and nail conditions.',
        fees: 600,
        address: {
            line1: 'Skincare Clinic',
            line2: 'Pune, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Preeti Rao',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '6 Years',
        about: 'Specializes in child healthcare and wellness.',
        fees: 700,
        address: {
            line1: 'Child Care Clinic',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Manoj Gupta',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '9 Years',
        about: 'Specialist in treating brain and nervous system disorders.',
        fees: 1500,
        address: {
            line1: 'Neuro Care Center',
            line2: 'Bangalore, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Ramesh Patil',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '8 Years',
        about: 'Specialist in digestive system and liver disorders.',
        fees: 1300,
        address: {
            line1: 'Digestive Care Clinic',
            line2: 'Hyderabad, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kavita Iyer',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Provides comprehensive primary care and preventive treatments.',
        fees: 600,
        address: {
            line1: 'Health Hub',
            line2: 'Bengaluru, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Anil Sharma',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Gyn)',
        experience: '12 Years',
        about: 'Specializes in high-risk pregnancies and reproductive health.',
        fees: 800,
        address: {
            line1: 'Women’s Health Center',
            line2: 'Chennai, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pooja Verma',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '5 Years',
        about: 'Focuses on cosmetic dermatology and skin rejuvenation.',
        fees: 700,
        address: {
            line1: 'Glow Skin Clinic',
            line2: 'Lucknow, India'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Vivek Anand',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '8 Years',
        about: 'Expert in child nutrition and vaccination programs.',
        fees: 750,
        address: {
            line1: 'Happy Kids Clinic',
            line2: 'Jaipur, India'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Suman Rao',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '11 Years',
        about: 'Specializes in treating neurological disorders like epilepsy and migraines.',
        fees: 1600,
        address: {
            line1: 'Neuro Care Hospital',
            line2: 'Kolkata, India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Deepak Singh',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '10 Years',
        about: 'Specialist in liver diseases and gastrointestinal endoscopy.',
        fees: 1400,
        address: {
            line1: 'Liver Care Center',
            line2: 'Ahmedabad, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Aarti Kulkarni',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Focuses on preventive health care and chronic disease management.',
        fees: 550,
        address: {
            line1: 'City Health Clinic',
            line2: 'Nagpur, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Sanjay Kapoor',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Gyn)',
        experience: '9 Years',
        about: 'Specialist in infertility treatments and IVF.',
        fees: 900,
        address: {
            line1: 'Fertility Clinic',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Rekha Das',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '7 Years',
        about: 'Focuses on treating skin allergies and infections.',
        fees: 650,
        address: {
            line1: 'Dermacare Center',
            line2: 'Patna, India'
        }
    }
];


