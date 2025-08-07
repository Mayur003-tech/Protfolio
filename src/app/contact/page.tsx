"use client";
import Image from "next/image";

export default function Contact() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "3819c384-9906-4c7e-ab8e-79065ceda60a",
                name: ((e.target as HTMLFormElement).elements.namedItem("name") as HTMLInputElement).value,
                email: ((e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement).value,
                message: ((e.target as HTMLFormElement).elements.namedItem("message") as HTMLTextAreaElement).value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            alert("Form submitted!");
            (e.target as HTMLFormElement).reset();
        }
    }

    return (
      <section className="pt-30 md:pt-37 pb-16 bg-gradient-to-b from-[#87CEEB] to-[#B0C4DE] text-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-15 ">
          <div className="flex flex-col items-start justify-center space-y-6 md:order-0 order-1">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-50 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="p-3 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="email@example.com"
                        className="p-3 rounded-lg border text-gray-700  bg-white  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold text-gray-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Enter Message"
                        className="p-3 rounded-lg border text-gray-700  bg-white  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="mt-4 py-3 px-6 rounded-full bg-gradient-to-br from-[#4682B4] to-[#2A5A88] text-white font-bold transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
                >
                    Submit Form
                </button>
            </form>
          </div>

          {/* right content */}
            <div className="flex justify-end items-center  md:order-1 order-0">
              <Image
                  src="/svg/Contact us-amico.svg"
                   alt="Mayur Gotmare"
                   width={500}
                   height={400}
                  className="object-cover transition-transform transform hover:scale-105"
                        />
            </div>
        </div>
        </section>
    );
}