import React from "react";
import { Col, Row, Typography, Divider } from "antd";
import styles from './BusinessPartners.module.css'

import image1 from "../../assets/images/microsoft-80658_640.png";
import image2 from "../../assets/images/icon-720944_640.png";
import image3 from "../../assets/images/follow-826033_640.png";
import image4 from "../../assets/images/facebook-807588_640.png";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Youtube" },
  { src: image3, title: "Ins" },
  { src: image4, title: "Facebook" },
];

export const BussinessPartners: React.FC = (props) => {
    return(
        <div className={styles.content}>
        <Divider orientation="left">
            <Typography.Title level={3}></Typography.Title>
        </Divider>
        <Row>
            {
              companies.map((item,index)=>(
                <Col span={6} key={"business-partner"+index}>
                    <img 
                    alt="bussiness-partner"
                    src={item.src}
                    style={{
                        width: "80%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                </Col>
              ))
            }

        </Row>

    </div>

    )
  
};
