import { Point } from "ol/geom";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { RFeature, RLayerVector, RMap, ROSM, ROverlay, RStyle } from "rlayers";
import * as Icons from "@heroicons/react/24/outline";

const center = fromLonLat([4.7986, 43.85725]);

export default function Location() {
    return (
        <section id="gallery" className="grid h-full grid-rows-[5rem_60vh] gap-y-14 px-3 pb-14 sm:px-10 md:px-14 lg:px-20">
            <header className="flex items-center justify-center">
                <h2 className="sm:text-4-xl border-b border-gray-400 text-3xl md:text-5xl">Emplacement</h2>
            </header>
            <RMap className="h-full w-1/2 place-self-center border-2 border-indigo-300" initial={{ center: center, zoom: 17 }}>
                <ROSM />
                <RLayerVector zIndex={10}>
                    <RFeature
                        geometry={new Point(center)}
                        onClick={(e: any) =>
                            e.map.getView().fit(e.target.getGeometry().getExtent(), {
                                maxZoom: 17,
                            })
                        }
                    />
                </RLayerVector>
            </RMap>
        </section>
    );
}
