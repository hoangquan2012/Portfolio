import React from "react";
import Layouts from "../../src/components/layouts";
import Link from "next/link";
import styles from './about.module.css';
import {
    InstagramFilled,
    FacebookFilled,
    GithubFilled,
    SkypeFilled
} from '@ant-design/icons';
const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.my_name}>Hoang <span style={{ color: '#bd5d38' }}>Quan</span></h1>
            <div className={styles.subheading}>13NO4 resettlement area trieu khuc &nbsp; <span style={{ color: '#bd5d38', textDecoration: 'underline' }}>quanna3799@gmail.com</span> </div>
            <p className={styles.description}>My name is Quan. I’m 23 years old and graduated from University Of Transport Technology with a degree in  Information Technology Branch.

                I’m working as a Frontend Developer in MQ Solutions company with over 1 month experience developing different websites, apps and implementing them — from landing pages to big projects, mostly using ReactJS. I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.

                My goal for the next two years is to be a Senior Frontend Developer. I’m now ready for more challenges and this position really excites me.

                That’s all about me</p>
            <div>
                <Link className={styles.social_icon} href='https://ant.design/components/icon/'><InstagramFilled /></Link>
                <Link className={styles.social_icon} href='https://www.facebook.com/zind09/'><FacebookFilled /></Link>
                <Link className={styles.social_icon} href='https://ant.design/components/icon/'><GithubFilled /></Link>
                <Link className={styles.social_icon} href='https://ant.design/components/icon/'><SkypeFilled /></Link>
            </div>
        </div>
    )
}

export default About

