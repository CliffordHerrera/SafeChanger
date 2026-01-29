import { changes } from "../../../mockend/changes";
import type { Changes } from "@/types/global";
import { ChangeItem } from "@/ui-kit/body/changeItem";

export const LastChanges = () => {
    return (
        <div className="bg-gray-100 p-4 min-h-[200px]">
            <h1 className="text-[19px] text-black font-medium mb-6">
                Последние обмены
            </h1>
            <div className="flex flex-row gap-4">
                {changes.map((change, index ) => (
                    <ChangeItem key={index} change={change}/>
                ))}
                
            </div>
        </div>
    );
}