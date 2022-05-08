import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="fs-1 text-center my-5">Blogs</h2>
      <div className="">
        <h2>Difference between javascript and nodejs?</h2>
        <p className="fs-5 text-dark">
          <strong className="" style={{ color: "#275aa9" }}>
            Ans:{" "}
          </strong>
          javascript এবং nodejs এর মধ্যে পার্থক্য:-
          <ul>
            <li>
              Javascript: জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা। আমরা একটি
              ওয়েবসাইটে স্ক্রিপ্ট লিখতে Javascript ব্যবহার করি যা ওয়েব
              পৃষ্ঠাগুলিকে আরও গতিশীল করে তোলে। আমরা শুধুমাত্র ব্রাউজারে
              Javascript চালাতে পারি। জাভাস্ক্রিপ্ট ফ্রন্ট এন্ডের ডেভেলপমেন্টে
              ব্যবহার করা হয়।
            </li>
            <li>
              Node.JS: Node.js 2009 সালে Ryan Dahl দ্বারা বিকাশিত এবং চালু করা
              হয়েছিল। Node.JS জাভাস্ক্রিপ্টের জন্য একটি রানটাইম environment।
              Node.js ওয়েব অ্যাপ, রিয়েল-টাইম চ্যাট অ্যাপস, কমান্ড-লাইন অ্যাপস
              এবং REST API সার্ভার সহ বিভিন্ন ধরনের অ্যাপ্লিকেশন তৈরি করতে
              ব্যবহার করা যেতে পারে। NodeJS আমাদের ব্রাউজারের বাইরে JS চালাতে
              সাহায্য করে। Node.JS আমাদের সার্ভার-সাইডে JS ব্যবহার করতে দেয়।
            </li>
          </ul>
        </p>
      </div>
      <div className="">
        <h2> Differences between sql and nosql databases?</h2>
        <p className="fs-5 text-dark">
          <strong className="" style={{ color: "#275aa9" }}>
            Ans:{" "}
          </strong>
          sql এবং nosql ডাটাবেসের মধ্যে পার্থক্য:
          <ul>
            <li>SQL ডাটাবেসগুলি সম্পর্কযুক্ত, NoSQL ডেটাবেসগুলি সম্পর্কহীন।</li>
            <li>
              SQL ডাটাবেস স্ট্রাকচার্ড query ভাষা ব্যবহার করে এবং একটি
              পূর্বনির্ধারিত schema আছে। NoSQL ডাটাবেসে অসংগঠিত ডেটার জন্য
              গতিশীল schema রয়েছে।
            </li>
            <li>
              SQL ডাটাবেসগুলি vertically scalable, যখন NoSQL ডেটাবেসগুলি
              vertically scalable।
            </li>
            <li>
              SQL ডাটাবেসগুলি টেবিল-ভিত্তিক, যখন NoSQL ডাটাবেসগুলি document,
              key-value, graph বা প্রশস্ত-কলাম স্টোর।
            </li>
            <li>
              SQL ডাটাবেসগুলি মাল্টি-সারি ডাটা লেনদেনের জন্য ভাল, যখন documents
              বা JSON-এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
            </li>
          </ul>
        </p>
      </div>
      <div className="">
        <h2>What is the purpose of jwt and how does it work?</h2>
        <p className="fs-5 text-dark">
          <strong className="" style={{ color: "#275aa9" }}>
            Ans:{" "}
          </strong>
          JWT, বা JSON Web Token, একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে
          নিরাপত্তা তথ্য ভাগ করার জন্য ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি
          সার্ভার। একটি JWT হল কিছু JSON ডেটার মালিক যাচাই করার একটি প্রক্রিয়া।
          টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার
          জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।
          একটি JWT-এর কাঠামো আপনাকে যাচাই করতে দেয় যে বিষয়বস্তুতে কোনো
          পরিবর্তন করা হয়নি। যখন একটি সার্ভার একটি JWT গ্রহণ করে, তখন এটি
          নিশ্চিত করতে পারে যে এতে থাকা ডেটা বিশ্বাসযোগ্য হতে পারে কারণ এটি উৎস
          দ্বারা স্বাক্ষরিত।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
