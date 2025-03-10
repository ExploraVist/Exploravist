import React, { useContext, useState } from 'react';
import { UpdatesContext } from '../context/UpdatesContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Admin.css';

const Admin = () => {
  const { updates, addUpdate, editUpdate, deleteUpdate, imagesMap } = useContext(UpdatesContext);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Editing UI states
  const [editingUpdate, setEditingUpdate] = useState(null);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);

  // State for new section inputs
  const [sectionType, setSectionType] = useState('paragraph');
  const [sectionContent, setSectionContent] = useState('');
  const [sectionItems, setSectionItems] = useState('');
  const [sectionHeaderLevel, setSectionHeaderLevel] = useState(2);
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [imageKey, setImageKey] = useState(Object.keys(imagesMap)[0]);
  const [editingSectionIndex, setEditingSectionIndex] = useState(null);

  const resetForm = () => {
    setCategory('');
    setDate('');
    setTitle('');
    setSections([]);
    setEditingUpdate(null);
    resetSectionBuilder();
  };

  const resetSectionBuilder = () => {
    setSectionType('paragraph');
    setSectionContent('');
    setSectionItems('');
    setSectionHeaderLevel(2);
    setLinkText('');
    setLinkUrl('');
    setImageKey(Object.keys(imagesMap)[0]);
    setEditingSectionIndex(null);
  };

  const handleAddOrUpdateSection = () => {
    let newSection = null;
    if (sectionType === 'paragraph' || sectionType === 'header') {
      newSection = { type: sectionType, content: sectionContent };
      if (sectionType === 'header') {
        newSection.headerLevel = sectionHeaderLevel;
      }
    } else if (sectionType === 'list') {
      const items = sectionItems.split('\n').filter(item => item.trim() !== '');
      newSection = { type: 'list', items };
    } else if (sectionType === 'paragraphWithLink') {
      newSection = { type: 'paragraphWithLink', content: sectionContent, link: { text: linkText, url: linkUrl } };
    } else if (sectionType === 'imageLink') {
      newSection = { type: 'imageLink', imageKey, link: linkUrl };
    }
    if (newSection) {
      if (editingSectionIndex !== null) {
        const updatedSections = [...sections];
        updatedSections[editingSectionIndex] = newSection;
        setSections(updatedSections);
      } else {
        setSections(prev => [...prev, newSection]);
      }
      resetSectionBuilder();
    }
  };

  const handleEditSection = (index) => {
    const sec = sections[index];
    setSectionType(sec.type);
    if (sec.type === 'paragraph' || sec.type === 'header' || sec.type === 'paragraphWithLink') {
      setSectionContent(sec.content);
    }
    if (sec.type === 'header' && sec.headerLevel) {
      setSectionHeaderLevel(sec.headerLevel);
    }
    if (sec.type === 'list') {
      setSectionItems(sec.items.join('\n'));
    }
    if (sec.type === 'paragraphWithLink' && sec.link) {
      setLinkText(sec.link.text);
      setLinkUrl(sec.link.url);
    }
    if (sec.type === 'imageLink') {
      setImageKey(sec.imageKey);
      setLinkUrl(sec.link);
    }
    setEditingSectionIndex(index);
  };

  const handleDeleteSection = (index) => {
    const updatedSections = sections.filter((_, idx) => idx !== index);
    setSections(updatedSections);
    if (editingSectionIndex === index) {
      resetSectionBuilder();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !date || !title) {
      alert("Please fill out category, date, and title.");
      return;
    }
    const newUpdate = {
      id: editingUpdate ? editingUpdate.id : Date.now(),
      category,
      date,
      title,
      sections
    };
    if (editingUpdate) {
      editUpdate(newUpdate);
    } else {
      addUpdate(newUpdate);
    }
    resetForm();
  };

  const handleEditUpdate = (update) => {
    setEditingUpdate(update);
    setCategory(update.category);
    setDate(update.date);
    setTitle(update.title);
    setSections(update.sections);
    resetSectionBuilder();
  };

  const handleDeleteUpdate = (id) => {
    if (window.confirm("Are you sure you want to delete this update?")) {
      deleteUpdate(id);
      if (editingUpdate && editingUpdate.id === id) {
        resetForm();
      }
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "exploravisttothemoon") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  return (
    <div className="admin-container">
      <Navbar />
      <main className="admin-main">
        {!isAuthenticated ? (
          <section className="admin-login-section">
            <div className="login-container">
              <h2 className="login-title">Enter Admin Password</h2>
              <form onSubmit={handleLoginSubmit} className="login-form">
                <input
                  type="password"
                  className="futuristic-input"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="login-btn">Enter</button>
                {authError && <p className="auth-error">{authError}</p>}
              </form>
            </div>
          </section>
        ) : (
          <>
            <div className="admin-edit-header">
              <h1 className="admin-title">Admin Dashboard</h1>
              <button className="admin-btn logout-btn" onClick={handleLogout}>Log Out</button>
            </div>
            <form className="admin-form" onSubmit={handleSubmit}>
              <h2>{editingUpdate ? "Edit Update" : "Create New Update"}</h2>
              <label>
                Category:
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
              </label>
              <label>
                Date:
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>
              <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </label>
              <div className="sections-container">
                <h3 className="sections-title">Sections:</h3>
                {sections.map((sec, index) => (
                  <div key={index} className="section-item">
                    <div className="section-type">{sec.type}</div>
                    <div className="section-content">
                      {sec.type === 'list'
                        ? sec.items.join(', ')
                        : sec.type === 'paragraphWithLink'
                        ? `${sec.content} (${sec.link.text}: ${sec.link.url})`
                        : sec.content || (sec.imageKey ? sec.imageKey : '')}
                    </div>
                    <div className="section-buttons">
                      <button className="admin-btn" type="button" onClick={() => handleEditSection(index)}>Edit</button>
                      <button className="admin-btn" type="button" onClick={() => handleDeleteSection(index)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-builder">
                <h3 className="builder-title">
                  {editingSectionIndex !== null ? "Edit Section" : "Add Section"}
                </h3>
                <label>
                  Section Type:
                  <select value={sectionType} onChange={(e) => setSectionType(e.target.value)}>
                    <option value="paragraph">Paragraph</option>
                    <option value="header">Header</option>
                    <option value="list">List</option>
                    <option value="paragraphWithLink">Paragraph with Link</option>
                    <option value="imageLink">Image with Link</option>
                  </select>
                </label>
                {(sectionType === 'paragraph' || sectionType === 'header' || sectionType === 'paragraphWithLink') && (
                  <label>
                    Content:
                    <textarea value={sectionContent} onChange={(e) => setSectionContent(e.target.value)} />
                  </label>
                )}
                {sectionType === 'header' && (
                  <label>
                    Header Level:
                    <input type="number" value={sectionHeaderLevel} onChange={(e) => setSectionHeaderLevel(Number(e.target.value))} min="1" max="6" />
                  </label>
                )}
                {sectionType === 'list' && (
                  <label>
                    List Items (one per line):
                    <textarea value={sectionItems} onChange={(e) => setSectionItems(e.target.value)} />
                  </label>
                )}
                {sectionType === 'paragraphWithLink' && (
                  <>
                    <label>
                      Link Text:
                      <input type="text" value={linkText} onChange={(e) => setLinkText(e.target.value)} />
                    </label>
                    <label>
                      Link URL:
                      <input type="text" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
                    </label>
                  </>
                )}
                {sectionType === 'imageLink' && (
                  <>
                    <label>
                      Image:
                      <select value={imageKey} onChange={(e) => setImageKey(e.target.value)}>
                        {Object.keys(imagesMap).map(key => (
                          <option key={key} value={key}>{key}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Link URL (optional):
                      <input type="text" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
                    </label>
                  </>
                )}
                <button className="admin-btn" type="button" onClick={handleAddOrUpdateSection}>
                  {editingSectionIndex !== null ? "Update Section" : "Add Section"}
                </button>
              </div>
              <button className="admin-btn" type="submit">{editingUpdate ? "Update" : "Create Update"}</button>
              {editingUpdate && <button className="admin-btn" type="button" onClick={resetForm}>Cancel Edit</button>}
            </form>
            <section className="admin-updates-list">
              <h2>Existing Updates</h2>
              {updates.map(update => (
                <div key={update.id} className="admin-update-item">
                  <h3>{update.category}: {update.title} ({update.date})</h3>
                  <button className="admin-btn" onClick={() => handleEditUpdate(update)}>Edit</button>
                  <button className="admin-btn" onClick={() => handleDeleteUpdate(update.id)}>Delete</button>
                </div>
              ))}
            </section>
            <br />
            <br />
            <Link className="admin-btn" to="/updates">Go to Public Updates</Link>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Admin;