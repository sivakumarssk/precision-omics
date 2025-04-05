"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Layouts/Navbar";

export default function Page() {
  return (
    <>
    <Navbar />

      <div className="cancel-area">
        <div className="d-table">
          <div className="d-table-cell">
            <Image
              src="/images/own/paymentfailed.png"
              alt="Payment Cancelled"
              width={300}
              height={300}
            />
            <h1>Payment Cancelled</h1>
            <p>Your payment was not completed. You can try again.</p>
            <Link href="/Register" className="btn btn-primary">
              View Plans
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cancel-area {
          text-align: center;
          padding: 100px 20px;
          margin-top:7%;
        }
        h1 {
          color: red;
        }
        p {
          margin: 20px 0;
          font-size: 16px;
        }
        .btn-primary {
          padding: 10px 20px;
          background-color: red;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
