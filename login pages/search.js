/* Search box styles */
.search-container {
    position: relative;
    margin: 20px 0;
    transition: all 0.3s ease;
}

.search-container.search-focused {
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.3);
}

#Searchbox {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 30px;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;
}

#Searchbox:focus {
    border-color: #4facfe;
    box-shadow: 0 4px 10px rgba(79, 172, 254, 0.2);
}

/* Book animations */
.book {
    transition: all 0.3s ease;
}

.book.search-animation {
    animation: pulse 0.3s ease;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(0.98); }
    100% { transform: scale(1); }
}

/* No results message */
.no-results {
    text-align: center;
    padding: 30px;
    color: #666;
    font-size: 1.2rem;
    display: none;
    opacity: 0;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
