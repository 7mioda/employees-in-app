/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import withStyle from './withStyle';
import { closeModal } from '../../actions/uiAction';

const Modal = ({
  className, open, closeModal, modalContent: { title, body, media = null },
}) => (
  <div className={className}>
    <Dialog
      open={open}
      onClose={closeModal}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={className}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {(media
        && (
          <div style={{ width: '500px', height: '100px', overflow: 'hidden' }}>
            <img src={media} alt="oyez.jpg" className="employee-media" />
          </div>
        ))}
        {body}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary" autoFocus>
            Fermer
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  modalContent: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  open: state.ui.modalStatus,
  closeModal: state.ui.closeModal,
  modalContent: state.ui.modalContent,
});

export default compose(connect(mapStateToprops, { closeModal }), withStyle)(Modal);
