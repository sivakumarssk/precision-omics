"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Layouts/Navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="success-area" >
                <div className="d-table">
                    <div className="d-table-cell">
                        <Image
                            src="/images/own/Paymentsuccessful.png"
                            alt="Success"
                            width={200}
                            height={200}
                        />
                        <h1>Payment Successful!</h1>
                        <p>Thank you for your payment. Your registration is confirmed.<br />We will be in contact with more detials shortly</p>
                        <Link href="/" className="btn btn-primary">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .success-area {
          text-align: center;
          padding: 100px 20px;
          margin-top:7%;
        }
        h1 {
          color: green;
        }
        p {
          margin: 20px 0;
          font-size: 18px;
        }
        .btn-primary {
          padding: 10px 20px;
          background-color: green;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
      `}</style>
        </>
    );
}
