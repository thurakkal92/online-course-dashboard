import Badge from "@/components/ui/badge";
import { MenuItem, MenuList } from "@/components/ui/menu-item";
import Modal from "@/components/ui/modal";
import StarRating from "@/components/ui/star-rating";
import TextField from "@/components/ui/text-field";
import { POPULAR_SEARCHES, RECENT_SEARCHES } from "@/lib/constants";
import { ChevronRight, Clock, Search, Sparkles } from "lucide-react";
import Image from "next/image";

export default function SearchModal({
  open,
  onClose,
  setOpen,
}: {
  open: boolean;
  onClose: () => void;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={
        <TextField
          rightIcon="clear"
          onClick={() => setOpen(true)}
          autoFocus
          aria-label="Search courses"
          placeholder="Search courses, instructors, categories..."
          leftIcon={<Search className="w-5 h-5 text-text-default" />}
        />
      }
      size="lg"
    >
      <div className="flex items-center gap-2 px-3 lg:px-6 pt-4 pb-2">
        <Clock className="w-4 h-4" />
        <div className="text-caption-2 lg:text-caption-1 text-text-default ">
          RECENT SEARCHES
        </div>
      </div>
      <div className="px-0 lg:px-3">
        <MenuList className="flex flex-col">
          {RECENT_SEARCHES.map((item) => (
            <MenuItem variant="brand" key={item.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 lg:gap-4 relative w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={48}
                    height={48}
                    className="rounded-md shrink-0 border border-border-default"
                  />

                  <div>
                    <h3 className="text-body-2 lg:text-body-2 font-medium text-text-default line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-text-default text-caption-1 lg:text-body-2 line-clamp-1">
                        {item.category}
                      </p>
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-text-default" />
              </div>
            </MenuItem>
          ))}
        </MenuList>
        <hr className="border-border-default py-2" />
      </div>
      <div className="flex items-center gap-2 text-caption-1 text-text-default px-3 lg:px-6 py-1">
        <Sparkles className="w-4 h-4" />
        <div>POPULAR SEARCHES</div>
      </div>
      <div className="pt-1 px-0 lg:px-3">
        <MenuList>
          {POPULAR_SEARCHES.map((item) => (
            <MenuItem variant="brand" key={item.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 lg:gap-4 relative w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={48}
                    height={48}
                    className="rounded-md shrink-0 border border-border-default"
                  />

                  <div>
                    <h3 className="text-body-2 font-medium lg:text-body-2 text-text-default line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-text-default text-caption-1 lg:text-body-2 line-clamp-1">
                        {item.category}
                      </p>
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-text-default" />
              </div>
            </MenuItem>
          ))}
        </MenuList>
      </div>
      <hr className="border-border-default py-2" />
      <div className="px-3 lg:px-7 pb-4 flex justify-between items-center">
        <div>
          <Badge variant="default" text="ESC" />
          <span className="text-caption-1 lg:text-body-2 text-text-default ml-2">
            Close
          </span>
        </div>
        <p className="text-caption-1 lg:text-body-2">6 results</p>
      </div>
    </Modal>
  );
}
