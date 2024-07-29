import { Fragment, useRef, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Toast from "./Toast";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SlideOver({ open, setOpen }: any) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setMessage(error);
      return;
    }
    inputEl.current.value = "";
    setMessage("Success! 🔥🔥🚀🚀 You are now subscribed to the newsletter.");
  };

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    setLoading(true);
    await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
      .then(() => {
        console.log("should have worked");
        setMessage("Submitted successfully");
        setShowToast(true);
        setLoading(false);
      })
      .catch((e: any) => {
        setMessage(e.message);
        setShowToast(true);
        setLoading(false);
      });
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Subscribe to our waiting list{" "}
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <form onSubmit={subscribe} className="sm:flex-1">
                              <div>
                                <div className="flex flex-col space-y-8">
                                  <input
                                    value={firstName}
                                    onChange={(e: any) => {
                                      setFirstName(e.target.value);
                                    }}
                                    className="rounded-lg border border-gray-400 p-2 focus:border-gray-400 focus:outline-none focus:ring-0"
                                    placeholder="First Name"
                                  />
                                  <input
                                    value={lastName}
                                    onChange={(e: any) => {
                                      setLastName(e.target.value);
                                    }}
                                    className="rounded-lg border border-gray-400 p-2 focus:border-gray-400 focus:outline-none focus:ring-0"
                                    placeholder="First Name"
                                  />
                                  <input
                                    ref={inputEl}
                                    value={email}
                                    onChange={(e: any) => {
                                      setEmail(e.target.value);
                                    }}
                                    className="rounded-lg border border-gray-400 p-2 focus:border-gray-400 focus:outline-none focus:ring-0"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                <button
                                  type="submit"
                                  className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-transparent hover:bg-[#5dc8793a] px-3 py-2 text-sm font-semibold text-[#5dc87a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 sm:flex-1"
                                >
                                  {loading ? "Loading..." : "Submit"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <Toast
            open={showToast}
            message={message}
            duration={3000} // Duration in milliseconds
            onClose={() => {
              setShowToast(false);
            }}
          />
        </div>
      </Dialog>
    </Transition.Root>
  );
}
