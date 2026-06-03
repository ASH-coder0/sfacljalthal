import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DeleteIcon, Edit } from "lucide-react";

import PropTypes from "prop-types";
import { useState } from "react";
import AlertDialog from "./AlertDialog";
import CustomImage from "./CustomImage";

const NoticeList = ({ currentNotices, currentPage, totalPages, handlePageChange, handleEdit, handleDelete }) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [noticeId, setNoticeId] = useState(null);


  return (
    <>
      {isDialogOpen &&
        <AlertDialog
          onSubmit={() => {
            handleDelete(noticeId);
            setIsDialogOpen(false);
            setNoticeId(null);
          }}
          onCancel={() => {
            setIsDialogOpen(false);
            setNoticeId(null);
          }}
          warningMessage='Delete'
          isCancel={true}
          message={`Are you sure want to delete notice ?`}
        />
      }

      <div className="max-h-[65vh] overflow-y-scroll">
        <div className="grid grid-cols-2 gap-4">
          {currentNotices.map((notice) => (
            <Card key={notice.id} className="p-4 grid" >
              <CustomImage
                src={notice.featuredImage}
                className={`h-40 object-fit `}
              />
              <div>
                <h3 className="text-xl font-bold">{notice.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: notice.content }} className="leading-2 line-clamp-4"></p>
                <p>
                  <strong>Author:</strong> {notice.author}
                </p>
                <p>
                  <strong>Status:</strong> {notice.publishStatus}
                </p>
                <p>
                  <strong>Publish Date:</strong> {new Date(notice.publishDate).toISOString().split('T')[0]}
                </p>
                <div className="flex space-x-3 mt-2">

                  <button
                    onClick={() => {
                      handleEdit(notice);
                    }}
                  >
                    <Edit color="blue" />
                  </button>
                  <button
                    onClick={() => {
                      setNoticeId(notice.id);
                      setIsDialogOpen(true);
                    }}
                  >
                    <DeleteIcon color="red" />
                  </button>
                </div>
              </div>

            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
        <span>{currentPage} of {totalPages}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </>
  );
};

NoticeList.propTypes = {
  currentNotices: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,

};

export default NoticeList;