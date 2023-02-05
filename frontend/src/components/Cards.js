import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const posts = [
  {
    description:
      "Lorem ipsum dolor sit hjcjhgc jhgcjyhtc uyrc cnyhcdyur5d cnyuih6rd cyu6i5rdec uh6y4redr ci6chitecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    description:
      "Lsxdycfugvihbjnk mkl,amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    description:
      "How to use search engine optimization to drive sales",
  },
];

export default function Cards() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Successfully Copied!");
  };

  return (
    <div className="relative bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-gray-900 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-4xl">
            Here's the Results
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            The results are based on the values provided by user
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-indigo-600">Title</p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </a> */}
                  <p className="mt-3 text-base text-gray-200">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        copyToClipboard(post.description);
                      }}
                      className="inline-flex items-center px-12 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Copy to clipboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
