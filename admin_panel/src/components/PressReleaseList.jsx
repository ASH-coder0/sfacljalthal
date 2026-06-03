import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";
import { DeleteIcon, Edit } from "lucide-react";
import AlertDialog from "./AlertDialog";
import { useState } from "react";

const PressReleaseList = ({
  currentPressReleases,
  currentPage,
  totalPages,
  handlePageChange,
  handleEdit,
  handleDelete
}) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pressReleaseId, setPressReleaseId] = useState(null);

  return (
    <>
      {isDialogOpen &&
        <AlertDialog
          onSubmit={() => {
            handleDelete(pressReleaseId);
            setIsDialogOpen(false);
            setPressReleaseId(null);
          }}
          onCancel={() => {
            setIsDialogOpen(false);
            setPressReleaseId(null);
          }}
          warningMessage='Delete'
          isCancel={true}
          message={`Are you sure want to delete press release ?`}
        />

      }
      <div className="max-h-[65vh] overflow-y-scroll">
        <div className="grid grid-cols-2 gap-2">
          {currentPressReleases?.map((pressRelease) => {
            return (
              <Card key={pressRelease.id} className="p-4 grid" >
                <CustomImage
                  src={pressRelease.featuredImage}
                  className={`h-40 object-fit `}
                />
                <div>
                  <h3 className="text-xl font-bold">{pressRelease.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: pressRelease.content }} className="leading-2 line-clamp-4"></p>
                  <p>
                    <strong>Author:</strong> {pressRelease.author}
                  </p>
                  <p>
                    <strong>Status:</strong> {pressRelease.publishStatus}
                  </p>
                  <p>
                    <strong>Publish Date:</strong> {new Date(pressRelease.publishDate).toISOString().split('T')[0]}
                  </p>
                  <div className="flex space-x-3 mt-2">

                    <button
                      onClick={() => {
                        handleEdit(pressRelease);
                      }}
                    >
                      <Edit color="blue" />
                    </button>
                    <button
                      onClick={() => {
                        setPressReleaseId(pressRelease.id);
                        setIsDialogOpen(true);
                      }}
                    >
                      <DeleteIcon color="red" />
                    </button>
                  </div>
                </div>

              </Card>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </>
  );
};

PressReleaseList.propTypes = {
  currentPressReleases: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default PressReleaseList;
