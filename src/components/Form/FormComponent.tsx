import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FormComponent extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form-container">
          <div className="item-form-container">
            <label className="form-label" htmlFor="description">
              description
            </label>
            <input
              placeholder="СЕРЕБРЯНЫЕ СЕРЬГИ С ЯНТАРЁМ"
              type="text"
              id="description"
              name="description"
            />
          </div>
          <div className="item-form-container">
            <label className="form-label" htmlFor="date">
              date of delivery
            </label>
            <input type="date" id="date" />
          </div>
        </div>
        <div className="form-container">
          <div className="item-form-container">
            <label className="form-label" htmlFor="price">
              price
            </label>
            <input type="number" placeholder="722.40" id="price" />
          </div>
          <div className="item-form-container">
            <p className="form-label"> Discount</p>
            <div className="form-discount">
              <div>
                <input name="discount" id="0" type="radio" value="0" />
                <label htmlFor="0" className="form-label">
                  without discount
                </label>
              </div>
              <div>
                <input name="discount" id="5" type="radio" value="5" />
                <label htmlFor="5" className="form-label">
                  5%
                </label>
              </div>
              <div>
                <input name="discount" id="10" type="radio" value="10" />
                <label htmlFor="10" className="form-label">
                  10%
                </label>
              </div>
              <div>
                <input name="discount" id="15" type="radio" value="15" />
                <label htmlFor="15" className="form-label">
                  15%
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="item-form-container">
            <label htmlFor="person" className="form-label">
              FOR WHOM
            </label>
            <select id="person">
              <option value="women">For women</option>
              <option value="men">For men</option>
              <option value="unisex">Unisex</option>
              <option value="children">For children</option>
            </select>
          </div>
          <div className="item-form-container">
            <label className="form-label label-file" htmlFor="file">
              Image
              <span className="material-symbols-outlined label-file-icon">drive_folder_upload</span>
            </label>
            <input type="file" id="file" style={{ display: 'none' }} />
          </div>
        </div>
        <div className="item-form-container-last">
          <p className="form-label"> TYPE OF METAL</p>
          <div className="form-discount">
            <label className="form-label">
              <input type="checkbox" /> Pink gold
            </label>
            <label className="form-label">
              <input type="checkbox" /> White gold
            </label>
            <label className="form-label">
              <input type="checkbox" /> Combined Gold
            </label>
            <label className="form-label">
              <input type="checkbox" /> Yellow Gold
            </label>
            <label className="form-label">
              <input type="checkbox" /> Silver
            </label>
            <label className="form-label">
              <input type="checkbox" /> Combined Silver
            </label>
            <label className="form-label">
              <input type="checkbox" /> Silver Gilded
            </label>
          </div>
        </div>
        <div className="form-button">
          <button type="button">Submit</button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
