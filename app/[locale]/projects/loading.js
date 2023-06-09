export default function Loading() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="float-right sm:flex-auto ">
            <h1 className="text-base font-semibold leading-6 text-gray-900 ">
              Projects
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the projects in your account
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Purchase Order #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Job #
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                    >
                      <div className="mb-2.5 h-2.5 w-8 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </th>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
