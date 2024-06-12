import { SwipeAction,
    TrailingActions,
    LeadingActions,
 } from "react-swipeable-list"
import { liberacion } from "../api/Peticiones";
 import { ToastContainer,toast } from "react-toastify";
 
export const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => console.info('swipe action triggered')}>
            Action name
        </SwipeAction>
    </LeadingActions>
);

export const trailingActions = (id:string) => (
    <TrailingActions>
        <SwipeAction
            // destructive={true}
            onClick={() => {
                liberacion(id).then((res) => {
                  console.log(res)
                  toast.success(res)
                  setTimeout(() => {
                    window.location.reload()
                  }, 3000)
                  
                })
                //liberacion(id)
            }
        }
        >
        <div className="bg-orange-500 uppercase">
        <p className="text-white text-2xl font-bold">Liberar Comanda</p>
        </div>
          
            <ToastContainer />
        </SwipeAction>
    </TrailingActions>
);