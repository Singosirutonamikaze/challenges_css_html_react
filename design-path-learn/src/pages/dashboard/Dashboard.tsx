import { DottedSurface } from "../../utils/common/DottedSurface"

function Dashboard() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <DottedSurface className="w-full min-h-screen">
        <header className="relative z-50 text-stone-50 flex p-5 justify-between w-full items-center">
          <h1>&gt;TempCodes</h1>
          <nav className="flex w-1/2">
            <ul className="flex justify-between w-full">
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">Listes</a>
              </li>
              <li>
                <a href="#">Dashboards</a>
              </li>
              <li>
                <a href="#">Forms</a>
              </li>
              <li>
                <a href="#">Loadings</a>
              </li>
              <li>
                <a href="#">Modals</a>
              </li>
              <li>
                <a href="#">Typography</a>
              </li>
              <li>
                <a href="#">Backgrounds</a>
              </li>
            </ul>
          </nav>
        </header>

      </DottedSurface>
    </div>
  )
}

export default Dashboard
